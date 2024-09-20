import { Test } from "content";
import { Checker, CheckerResult } from "./base";

export const debtRepaymentChecker: Checker = (test: Test, out: string) => {
  if (!/\d+(.\d\d)/.test(out)) {
    return {
      status: "PE",
      message: `Expected a single number in the form X or X.dd, instead got ${out}`
    } as CheckerResult;
  }
  if (parseFloat(test.output) !== parseFloat(out)) {
    return {
      status: "WA",
      message: `Expected ${test.output}, got ${out}`
    } as CheckerResult;
  }
  return {
    status: "AC",
    message: `OK 1 token`
  } as CheckerResult;
}