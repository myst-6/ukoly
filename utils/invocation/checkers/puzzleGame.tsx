import { Test } from "content";
import { Checker, CheckerResult } from "./base";

type Intervals = {
  [key: string]: [number, number][];
};

const intervals: Intervals = {
  "RRGB": [[0, 3], [4, 4]],
  "RBRB": [[0, 0], [1, 1]],
  "RGRB": [[0, 3], [0, 3], [4, 4], [4, 4], [5, 5], [6, 6]],
  "BBBB": [[0, 3], [4, 4]],
  "RRGG": [[0, 3], [4, 4], [5, 8], [9, 9]],
  "RRGR": [[0, 3], [4, 4], [5, 8], [9, 9], [10, 13], [14, 14], [15, 18], [19, 19]],
};

export const puzzleGameChecker: Checker = (test: Test, out: string) => {
  const parse = (str: string) => str.trim().split("\n").map(line => line.trim()).filter(line => !!line);
  const expLines = parse(test.output).map(line => line.trim());
  const outLines = parse(out).map(line => line.trim());

  const ints = intervals[test.input.trim().split("\n")[0]!]!;

  if (expLines.length !== outLines.length) {
    return {
      status: "WA",
      message: `Expected ${expLines.length} line(s) but got ${outLines.length}`
    } as CheckerResult;
  }

  let score = 0;

  for (let int of ints) {
    const [start, end] = int;
    let flag = true;
    for (let i = start; i <= end; i++) {
      if (expLines[i] !== outLines[i]) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      score++;
    }
  }

  if (score === 0) {
    return {
      status: "WA",
      message: `No creditable response`
    } as CheckerResult;
  }

  if (score === test.points) {
    return {
      status: "AC",
      message: `OK 1 token`
    } as CheckerResult;
  }

  return {
    status: "PA",
    message: `Partial credit given`,
    partial: score / test.points
  }
}