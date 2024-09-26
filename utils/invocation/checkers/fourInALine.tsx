import { Test } from "content";
import { Checker, CheckerResult } from "./base";

type Intervals = {
  [key: string]: [number, number][];
};

const intervals: Intervals = {
    "6": [[0, 5], [0, 5], [6, 11], [6, 11], [12, 12]],
    "8": [[0, 5], [0, 5], [6, 11], [6, 11], [12, 17], [12, 17], [18, 23], [18, 23], [24, 24]],
    "5": [[0, 5], [0, 5], [6, 11], [6, 11], [12, 17], [12, 17], [18, 18]],
    "1": [[0, 5], [0, 5], [6, 11], [6, 11], [12, 12]],
};

export const fourInALineChecker: Checker = (test: Test, out: string) => {
  const parse = (str: string) => str.trim().split("\n").map(line => line.trim()).filter(line => !!line);
  const expLines = parse(test.output).map(line => line.trim()).map(line => line.replaceAll(/\s/g, ""))
  const outLines = parse(out).map(line => line.trim()).map(line => line.replaceAll(/\s/g, ""))

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