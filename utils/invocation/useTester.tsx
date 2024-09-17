import { useEffect, useState } from "react";
import { InvocationResult, InvocationStatus, waiting } from "./invoke";
import { BIO1ProblemInfo } from "content";
import { CheckerStatus } from "./checkers";
import { useInvoker } from "./useInvoker";
import { Language } from "content";

export type TestStatus = Exclude<InvocationStatus, "OK"> | CheckerStatus;

export interface TestResult {
  status: TestStatus;
  message: string;
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
  const [results, setResults] = useState<TestResult[]>([]);
  const [epoch, setEpoch] = useState<number>(0);
  const [problem, setProblem] = useState<BIO1ProblemInfo>(initialProblem);

  const { dispatch: invokerDispatch } = useInvoker();

  useEffect(() => {
    if (!problem.tests) {
      console.error("No tests for this problem.");
      return;
    }
    setResults([]);
  }, [problem]);

  /**
   * 
   * @param tests The list of tests used for the program.
   * @param checker The program used to compare an expected output against a participant's output.
   * @param source The source code of the participant.
   * @param lang The source code's language
   */
  function dispatch(source: string, lang: Language) {
    if (!problem.tests) {
      console.error("No tests for this problem.");
      return;
    }
    if (!problem.checker) {
      console.error("No checker for this problem.");
      return;
    }
    const { tests, checker } = problem;
    setResults(tests.map(() => waiting as TestResult));
    const dispatchedEpoch = epoch + 1;
    setEpoch(epoch => epoch + 1);
    invokerDispatch(
      tests.map(test => test.input), 
      source, 
      lang, 
      (index: number, result: InvocationResult) => {
        setEpoch(epoch => {
          console.log(dispatchedEpoch,epoch);
          if (dispatchedEpoch === epoch) {
            setResults(res => {
              if (res.length !== 0) {
                if (result.status === "OK") {
                  const checkerResult = checker(tests[index]!.output, result.message);
                  return [
                    ...res.slice(0, index), 
                    checkerResult as TestResult, 
                    ...res.slice(index + 1)
                  ];
                } else {
                  return [
                    ...res.slice(0, index), 
                    result as TestResult, 
                    ...res.slice(index + 1)
                  ];
                }
              }
              return [];
            });
          }
          return epoch;
        });
      }
    );
  }

  return { results, dispatch, problem, setProblem };
};