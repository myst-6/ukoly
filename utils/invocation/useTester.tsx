import { useEffect, useState } from "react";
import { usePostHog } from "posthog-js/react";
import { BIO1ProblemInfo } from "content";
import { CheckerStatus } from "./checkers";
import type { Language } from "content";
import { type InvocationStatus } from "./types";
import { useRunner } from "./useRunner";

export type TestStatus = Exclude<InvocationStatus, "OK"> | CheckerStatus;

export interface TestResult {
  status: TestStatus;
  output: string;
  time: number;
  memory: number;
  message: string;
  partial?: number; // should only exist if status is PA
}

interface SubmissionCompletedEvent {
  language: {
    display: string;
    extension: string;
    apiName: string;
  };
  problem: {
    display: string;
    year: number;
    question: number;
    difficulty: string;
    tags: string[];
    timeLimitMs?: number;
  };
  testCaseResults: {
    status: TestStatus;
    time: number;
    memory: number;
    message: string;
    partial?: number;
  }[];
  aggregateResults: {
    totalTests: number;
    passedTests: number;
    failedTests: number;
    successRate: number;
    statusCounts: Record<TestStatus, number>;
    totalTime: number;
    totalMemory: number;
    averageTime: number;
    averageMemory: number;
    allTestsPassed: boolean;
    totalScore: number;
  };
}

/**
 * @summary 
 * Runs code on a list of tests and produces test results. 
 * If the invocation status is anything other than OK then the test result is the same.
 * Otherwise, the checker is used to determine a checker status - either AC or WA.
 * 
 * @results
 * A reactive list of test results.
 * The i-th test result is for the i-th test given in the dispatch.
 * 
 * @dispatch​
 * A way of running the tests on a given source code and language.
 */
export function useTester(initialProblem: BIO1ProblemInfo) {
  const { results: invocationResults, dispatch: invocationDispatch } = useRunner(); 
  const [problem, setProblem] = useState<BIO1ProblemInfo>(initialProblem);
  const [results, setResults] = useState<TestResult[]>([]);
  const posthog = usePostHog();

  const calculateAggregateResults = (testResults: TestResult[]): SubmissionCompletedEvent['aggregateResults'] => {
    const statusCounts = testResults.reduce((acc, result) => {
      acc[result.status] = (acc[result.status] || 0) + 1;
      return acc;
    }, {} as Record<TestStatus, number>);

    const passedTests = (statusCounts['AC'] || 0) + (statusCounts['PA'] || 0);
    const totalTests = testResults.length;
    const totalTime = testResults.reduce((sum, result) => sum + result.time, 0);
    const totalMemory = testResults.reduce((sum, result) => sum + result.memory, 0);
    
    // calculate total score: full marks if AC, partial marks if PA, 0 otherwise
    const totalScore = testResults.reduce((sum, result) => {
      if (result.status === 'AC') {
        return sum + 1; // full marks per test
      } else if (result.status === 'PA' && result.partial !== undefined) {
        return sum + result.partial; // actual marks obtained
      } else {
        return sum + 0; // no marks
      }
    }, 0);

    return {
      totalTests,
      passedTests,
      failedTests: totalTests - passedTests,
      successRate: totalTests > 0 ? passedTests / totalTests : 0,
      statusCounts,
      totalTime,
      totalMemory,
      averageTime: totalTests > 0 ? totalTime / totalTests : 0,
      averageMemory: totalTests > 0 ? totalMemory / totalTests : 0,
      allTestsPassed: passedTests === totalTests && totalTests > 0,
      totalScore,
    };
  };

  useEffect(() => {
    setResults([]);
  }, [problem]);

  useEffect(() => {
    if (!problem.tests) {
      console.error("No tests for this problem.");
      return;
    }
    if (!problem.checker) {
      console.error("No checker for this problem.");
      return;
    }
    const { checker, tests } = problem;
    setResults(invocationResults.map((result, index) => {
      if (result.status === "OK" && tests[index]) {
        const checkerResult = checker(tests[index], result.stdout || "");
        return {
          ...checkerResult,
          output: result.stdout || "",
          time: result.time,
          memory: result.memory
        };
      } else {
        return {
          ...result,
          output: result.stdout || "",
        } as TestResult;
      }
    }));
  }, [invocationResults, problem]);

  /**
   * 
   * @param source The source code of the participant.
   * @param language The source code's language
   * @param turnstileToken The Cloudflare Turnstile token for security verification.
   */
  function dispatch(source: string, language: Language, turnstileToken: string) {
    if (!problem.tests) {
      console.error("No tests for this problem.");
      return;
    }
    const { tests } = problem;
    setResults(tests.map(() => ({
      status: "TS",
      output: "",
      time: 0,
      memory: 0,
      message: "Waiting...",
    })));
    invocationDispatch({
      inputs: tests.map(test => test.input),
      source,
      language,
      turnstileToken,
      timeLimitMs: problem.timeLimitMs,
      onComplete: () => {
        const eventData: SubmissionCompletedEvent = {
          language: {
            display: language.display,
            extension: language.extension,
            apiName: language.apiName,
          },
          problem: {
            display: problem.display,
            year: problem.year,
            question: problem.question,
            difficulty: problem.difficulty,
            tags: problem.tags,
            timeLimitMs: problem.timeLimitMs,
          },
          testCaseResults: results.map(result => ({
            status: result.status,
            time: result.time,
            memory: result.memory,
            message: result.message,
            partial: result.partial,
          })),
          aggregateResults: calculateAggregateResults(results),
        };

        posthog.capture('submission_completed', eventData);
      }
    });
  }

  return { results, dispatch, problem, setProblem };
};