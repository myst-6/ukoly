import { useState } from "react";
import { InvocationResult, InvocationStatus, waiting } from "./invoke";
import { Test } from "content";
import { Checker, CheckerStatus } from "./checkers";
import { useInvoker } from "./useInvoker";
import { Language } from "components";

export type TestStatus = Exclude<InvocationStatus, "OK"> | CheckerStatus;

export interface TestResult {
  status: TestStatus;
  message: string;
}

export function useTester(tests: Test[], checker: Checker) {
  const [results, setResults] = useState<TestResult[]>([]);

  const { dispatch: invokerDispatch } = useInvoker(
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

  function dispatch(source: string, lang: Language) {
    setResults(tests.map(() => waiting as TestResult));
    invokerDispatch(tests.map(test => test.input), source, lang);
  }

  return { results, dispatch };
};