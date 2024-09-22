import { Test } from "content";
import { Checker } from "./base";

export const turingMachineChecker: Checker = (test: Test, out: string) => {
  const parse = (str: string) => str.trim().split("\n").map(line => line.trim()).filter(line => !!line);
  const expLines = parse(test.output);
  const outLines = parse(out);

  if (expLines.length !== outLines.length) {
    return {
      status: "WA",
      message: `Expected ${expLines.length} lines, got ${outLines.length}`
    };
  }

  let score = 0;
  if (expLines[0] === outLines[0]) {
    score += Math.ceil(test.points / 2);
  }
  if (expLines[1] === outLines[1]) {
    score += test.points - Math.ceil(test.points / 2);
  }

  if (score === 0) {
    return {
      status: "WA",
      message: `No credit can be given for your response`
    };
  }

  else if (score === test.points) {
    return {
      status: "AC",
      message: `OK 2 lines`
    };
  }

  return {
    status: "PA",
    message: `Partial credit awarded`,
    partial: score / test.points,
  };
}