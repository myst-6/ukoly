import { useEffect, useState } from "react";
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
    invocationDispatch(tests.map(test => test.input), source, language, turnstileToken, problem.timeLimitMs);
  }

  return { results, dispatch, problem, setProblem };
};