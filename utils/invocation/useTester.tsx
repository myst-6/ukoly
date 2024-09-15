import { useState } from "react";
import { InvocationResult, InvocationStatus, waiting } from "./invoke";
import { Test } from "content";
import { Checker, CheckerStatus } from "./checkers";
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
export function useTester() {
  const [results, setResults] = useState<TestResult[]>([]);

  const { dispatch: invokerDispatch } = useInvoker();

  /**
   * 
   * @param tests The list of tests used for the program.
   * @param checker The program used to compare an expected output against a participant's output.
   * @param source The source code of the participant.
   * @param lang The source code's language
   */
  function dispatch(tests: Test[], checker: Checker, source: string, lang: Language) {
    setResults(tests.map(() => waiting as TestResult));
    invokerDispatch(
      tests.map(test => test.input), 
      source, 
      lang, 
      (index: number, result: InvocationResult) => {
        setResults(res => {
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
        });
      }
    );
  }

  return { results, dispatch };
};