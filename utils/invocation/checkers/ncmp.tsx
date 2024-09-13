import { Checker } from "./base";

// one or more integers, ignoring whitespace
export const ncmp: Checker = (exp: string, got: string) => {
  const getValues = (inp: string) => inp.match(/\d+/g) || [];
  const expValues = getValues(exp);
  const gotValues = getValues(got);
  if (expValues.length !== gotValues.length) {
    return {
      status: "WA",
      message: `Expected ${expValues.length} token(s) but got ${gotValues.length}`
    };
  }
  for (let i=0; i<expValues.length; i++) {
    if (expValues[i] !== gotValues[i]) {
      return {
        status: "WA",
        message: `Expected ${expValues[i]}, got ${gotValues[i]} (token ${i + 1})`
      };
    }
  }
  return {
    status: "AC",
    message: `OK ${expValues.length} token(s)`
  };
};