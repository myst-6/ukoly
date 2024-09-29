import { Test } from "content";
import { Checker } from "./base";

export const antsChecker: Checker = (test: Test, out: string) => {
  const parse = (str: string) => str.trim().split("\n").map(line => line.trim()).filter(line => !!line);
  const expLines = parse(test.output);
  const outLines = parse(out);
  
  let score = 0, total = 0, good = true;
  for (let i=0; i<expLines.length; i++) {
    if (expLines[i] !== outLines[i]) {
      good = false;
    }
    if (i % 13 === 10 || i % 13 === 12) {
      // test 2 is weird lol
      if (good) {
        score += i < 13 && test.input[0] !== "5" ? 2 : 1;
      }
      total += i < 13 && test.input[0] !== "5" ? 2 : 1;
      good = true;
    }
  }

  if (score === total) {
    return {
      status: "AC",
      message: `OK ${expLines.length} lines`
    };
  }

  if (score === 0) {
    return {
      status: "WA",
      message: `No credit can be given for your response`
    };
  }

  return {
    status: "PA",
    message: `Partial credit awarded`,
    partial: score / total,
  };
}