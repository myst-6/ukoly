import { Test } from "content";
import { Checker, CheckerResult } from "./base";

type Intervals = {
  [key: string]: [number, number][];
};

const intervals: Intervals = {
  "10 5 9999": [[0, 9], [0, 9]],
  "1 1 1000": [[0, 0], [1, 3], [4, 4], [5, 7], [8, 9]],
  "2 2 12345": [[0, 3], [4, 7], [4, 7], [8, 9], [8, 9]],
  "5 7 12346": [[0, 0], [1, 5], [1, 5], [6, 9], [6, 9]],
  "1 29209 32719": [[0, 1], [0, 1], [2, 9], [2, 9], [2, 9]],
  "16807 1 9999": [[0, 1], [0, 1], [2, 9], [2, 9], [2, 9]]
};

export const battleshipsChecker: Checker = (test: Test, out: string) => {
  const parse = (str: string) => str.trim().split("\n").map(line => line.trim()).filter(line => !!line);
  const expLines = parse(test.output).map(line => line.trim());
  const outLines = parse(out).map(line => line.trim());

  const ints = intervals[test.input]!;

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