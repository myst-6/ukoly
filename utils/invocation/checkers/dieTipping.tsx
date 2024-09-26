import { Test } from "content";
import { Checker, CheckerResult } from "./base";

type Intervals = {
  [key: string]: [number, number][];
};

const intervals: Intervals = {
  "1 3 5": [[0, 2], [3, 5], [6, 8]],
  "1 1 1": [[0, 2], [0, 2]],
  "2 1 2": [[0, 2], [3, 5], [6, 8], [9, 11], [9, 11]],
  "6 6 6": [[0, 2], [3, 5], [6, 8], [6, 8], [9, 11], [9, 11], [9, 11]],
  "4 5 4": [[0, 2], [0, 2], [3, 5], [3, 5], [6, 8], [6, 8], [6, 8]],
};

export const dieTippingChecker: Checker = (test: Test, out: string) => {
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