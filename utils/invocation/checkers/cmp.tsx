import { Test } from "content";
import { Checker, CheckerResult } from "./base";

/**
 * @summary
 * **Not a checker.** Used by the `X-cmp` checkers to compare two streams of tokens.
 */
export const cmp = <T,>(exp: T[], out: T[]): CheckerResult => {
  if (exp.length !== out.length) {
    return {
      status: "WA",
      message: `Expected ${exp.length} token(s) but got ${out.length}`
    };
  }
  for (let i=0; i<exp.length; i++) {
    if (exp[i] !== out[i]) {
      return {
        status: "WA",
        message: `Expected ${exp[i]}, got ${out[i]} (token ${i + 1})`
      };
    }
  }
  return {
    status: "AC",
    message: `OK ${exp.length} token(s)`
  };
};


/**
 * @summary
 * Checks one or more integers, ignoring whitespace
 */
export const ncmp: Checker = (test: Test, out: string) => {
  const getValues = (inp: string) => inp.match(/\d+/g) || [];
  const expValues = getValues(test.output);
  const outValues = getValues(out);
  return cmp(expValues, outValues);
};

/**
 * @summary
 * Checks one or more lines of code, **whitespace-sensitive**.
 */
export const fcmp: Checker = (test: Test, out: string) => {
  const getValues = (inp: string) => inp.split(/(\r)?\n/g);
  const expValues = getValues(test.output);
  const outValues = getValues(out);
  return cmp(expValues, outValues);
};

/**
 * @summary
 * Checks one or more strings, ignoring whitespace.
 */
export const wcmp: Checker = (test: Test, out: string) => {
  const getValues = (inp: string) => inp.match(/\S+/g) || [];
  const expValues = getValues(test.output);
  const outValues = getValues(out);
  return cmp(expValues, outValues);
};
