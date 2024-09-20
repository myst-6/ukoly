import { Test } from "content";
import { Checker, CheckerResult } from "./base";

function eq(a: number[], b: number[]): boolean {
  return a.length === b.length && a.every((x, i) => x === b[i]);
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

export const playingGamesChecker: Checker = (test: Test, out: string) => {
  const exp = test.output.trim();
  out = out.trim();
  
  if (exp === "Impossible") {
    if (out === "Impossible") {
      return {
        status: "AC",
        message: `OK 1 token`
      } as CheckerResult;
    } else {
      return {
        status: "WA",
        message: `Jury did not find a solution, but you did.`
      } as CheckerResult;
    }
  }

  const expValues = exp.split('\n').map(line => line.trim());
  const outValues = out.split('\n').map(line => line.trim());
  const inpValues = test.input.trim().split('\n').map(line => line.trim());

  if (outValues.length !== 2) {
    return {
      status: "WA",
      output: out,
      message: `Expected 2 lines, got ${outValues.length}`
    } as CheckerResult;
  }

  const [a1, b1] = expValues;
  const [a2, b2] = outValues;
  const [a3, b3] = inpValues;

  if (!a1 || !b1 || !a2 || !b2 || !a3 || !b3) {
    return {
      status: "WA",
      message: `Expected values for the two dice, but got nothing.`
    } as CheckerResult;
  }

  const expA = a1.split(' ');
  const expB = b1.split(' ');
  const outA = a2.split(' ');
  const outB = b2.split(' ');
  const inpA = a3.split(' ');
  const inpB = a3.split(' ');

  if (expA.length !== outA.length) {
    return {
      status: "WA",
      message: `Expected ${expA.length} elements in the first line, got ${outA.length}.`
    } as CheckerResult;
  }

  if (expB.length !== outB.length) {
    return {
      status: "WA",
      message: `Expected ${expB.length} elements in the second line, got ${outB.length}.`
    } as CheckerResult;
  }

  const expAInt = expA.map(Number);
  const expBInt = expB.map(Number);
  const outAInt = outA.map(Number);
  const outBInt = outB.map(Number);
  const inpAInt = inpA.map(Number);
  const inpBInt = inpB.map(Number);

  outAInt.sort((x, y) => x - y);
  outBInt.sort((x, y) => x - y);
  inpAInt.sort((x, y) => x - y);
  inpBInt.sort((x, y) => x - y);

  if (eq(inpAInt, outAInt) || eq(inpAInt, outBInt) || eq(inpBInt, outAInt) || eq(inpBInt, outBInt)) {
    return {
      message: `The output dice must be different from the input dice`,
    } as CheckerResult;
  }

  const expDice = makeDice(expAInt, expBInt);
  const outDice = makeDice(outAInt, outBInt);

  if ([...expDice.entries()].every(([key, value]) => outDice.get(key) === value)) {
    return {
      status: "AC",
      message: `OK 2 lines`
    } as CheckerResult;
  } else {
    return {
      status: "WA",
      message: `The dice do not match`
    } as CheckerResult;
  }
}
