import { Checker, CheckerResult } from "./base";

/**
 * @summary
 * **Not a checker.** Used by the `X-cmp` checkers to compare two streams of tokens.
 */
export const cmp = <T,>(exp: T[], got: T[], output: string): CheckerResult => {
  if (exp.length !== got.length) {
    return {
      status: "WA",
      output,
      message: `Expected ${exp.length} token(s) but got ${got.length}`
    };
  }
  for (let i=0; i<exp.length; i++) {
    if (exp[i] !== got[i]) {
      return {
        status: "WA",
        output,
        message: `Expected ${exp[i]}, got ${got[i]} (token ${i + 1})`
      };
    }
  }
  return {
    status: "AC",
    output,
    message: `OK ${exp.length} token(s)`
  };
};


/**
 * @summary
 * Checks one or more integers, ignoring whitespace
 */
export const ncmp: Checker = (exp: string, got: string) => {
  const getValues = (inp: string) => inp.match(/\d+/g) || [];
  const expValues = getValues(exp);
  const gotValues = getValues(got);
  return cmp(expValues, gotValues, got);
};

/**
 * @summary
 * Checks one or more lines of code, **whitespace-sensitive**.
 */
export const fcmp: Checker = (exp: string, got: string) => {
  const getValues = (inp: string) => inp.split(/(\r)?\n/g);
  const expValues = getValues(exp);
  const gotValues = getValues(got);
  return cmp(expValues, gotValues, got);
};

/**
 * @summary
 * Checks one or more strings, ignoring whitespace.
 */
export const wcmp: Checker = (exp: string, got: string) => {
  const getValues = (inp: string) => inp.match(/\S+/g) || [];
  const expValues = getValues(exp);
  const gotValues = getValues(got);
  return cmp(expValues, gotValues, got);
};

  export const debtRepaymentChecker = (exp: string, got: string) => {
  if (!/\d+(.\d\d)/.test(got)) {
    return {
      status: "PE",
      output: got,
      message: `Expected a single number in the form X or X.dd, instead got ${got}`
    } as CheckerResult;
  }
  if (parseFloat(exp) !== parseFloat(got)) {
    return {
      status: "WA",
      output: got,
      message: `Expected ${exp}, got ${got}`
    } as CheckerResult;
  }
  return {
    status: "AC",
    output: got,
    message: `OK 1 token`
  } as CheckerResult;
}
