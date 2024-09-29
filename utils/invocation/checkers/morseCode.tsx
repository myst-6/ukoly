import { Test } from "content";
import { Checker } from "./base";

export const morseCodeChecker: Checker = (test: Test, out: string) => {
  const parse = (str: string) => str.trim().split("\n").map(line => line.trim()).filter(line => !!line);
  const expLines = parse(test.output);
  const outLines = parse(out);
  if (expLines[0] === outLines[0]) {
    return {
      status: "AC",
      message: `OK 1 line`
    };
  }
  else if (expLines.length === 2 && expLines[1]?.slice(1, -1) === outLines[0]) {
    return {
      status: "PA",
      message: `Partial credit awarded, as per mark scheme`,
      partial: 1 / test.points
    };
  }
  return {
    status: "WA",
    message: `No credit can be given for your response`
  };
}