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

function makeDice(a: number[], b: number[]): Map<number, number> {
  const dice = new Map<number, number>();
  for (const i of a) {
    for (const j of b) {
      dice.set(i + j, (dice.get(i + j) || 0) + 1);
    }
  }
  return dice;
}


export const playingGamesChecker = (exp: string, got: string) => {
  exp = exp.trim();
  got = got.trim();
  if (exp === "Impossible") {
    if (got === "Impossible") {
      return {
        status: "AC",
        output: got,
        message: `OK 1 token`
      } as CheckerResult;
    }
    else {
      return {
        status: "WA",
        output: got,
        message: `Jury did not find a solution, but you did.`
      } as CheckerResult;
    }
  }
  const expValues = exp.split('\n');
  const gotValues = got.split('\n');
  console.log("HI");
  console.log(expValues);
  console.log(gotValues);

  if (gotValues.length !== 2) {
    return {
      status: "WA",
      output: got,
      message: `Expected 2 lines, got ${gotValues.length}`
    } as CheckerResult;
  }

  const [a, b] = expValues;
  const [a1, b1] = gotValues;

  if (a === undefined || b === undefined || a1 === undefined || b1 === undefined) {
    return {
      status: "WA",
      output: got,
      message: `Expected values for the two dice, but got nothing.`
    } as CheckerResult;
  }

  const expA = a.split(' ');
  const expB = b.split(' ');
  const gotA = a1.split(' ');
  const gotB = b1.split(' ');
  if (expA.length !== gotA.length) {
    return {
      status: "WA",
      output: got,
      message: `Expected ${expA.length} elements in the first line, got ${gotA.length}.`
    } as CheckerResult;
  }
  if (expB.length !== gotB.length) {
    return {
      status: "WA",
      output: got,
      message: `Expected ${expB.length} elements in the second line, got ${gotB.length}.`
    } as CheckerResult;
  }

  if (gotA.length !== gotB.length) {
    return {
      status: "WA",
      output: got,
      message: `Expected ${expA.length} elements in each line, got ${gotA.length} and ${gotB.length}.`
    } as CheckerResult;
  }

  const expAInt = expA.map(Number);
  const expBInt = expB.map(Number);
  const gotAInt = gotA.map(Number);
  const gotBInt = gotB.map(Number);

  expAInt.sort((x, y) => x - y);
  expBInt.sort((x, y) => x - y);
  gotAInt.sort((x, y) => x - y);
  gotBInt.sort((x, y) => x - y);

  if (expAInt === gotAInt || expAInt === gotBInt || expBInt === gotAInt || expBInt === gotBInt) {
    return {
      status: "WA",
      output: got,
      message: `The output dice must be different from the input dice`,
    } as CheckerResult;
  }

  const expDice = makeDice(expAInt, expBInt);
  const gotDice = makeDice(gotAInt, gotBInt);

  if (Array.from(expDice.entries()).every(([key, value]) => gotDice.get(key) === value)) {
    return {
      status: "AC",
      output: got,
      message: `OK 3 lines`
    } as CheckerResult;
  }
  else {
    console.log(makeDice(expAInt, expBInt));
    console.log(makeDice(gotAInt, gotBInt));
    console.log(expAInt == gotAInt);
    return {
      status: "WA",
      output: got,
      message: `The dice do not match`
    } as CheckerResult;
  }
}
