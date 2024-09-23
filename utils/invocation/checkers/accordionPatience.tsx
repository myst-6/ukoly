import { Test } from "content";
import { Checker, CheckerResult } from "./base";

export const accordionPatienceChecker: Checker = (test: Test, out: string) => {
    const expectedOutput = test.output.trim().split('\n');
    const actualOutput = out.trim().split('\n').map(line => line.trim());

    if (expectedOutput.length !== actualOutput.length) {
        return {
            status: "WA",
            message: `Expected ${expectedOutput.length} lines, got ${actualOutput.length}`
        } as CheckerResult;
    }

    let score = 0, total = 0;
    for (let i = 0; i < expectedOutput.length; i++) {
        total++;
        if (expectedOutput[i] === actualOutput[i]) {
            score++;
        }
    }

    if (score === total) {
        return {
            status: "AC",
            message: `OK ${total} tokens`
        } as CheckerResult;
    }

    if (score === 0) {
        return {
            status: "WA",
            message: `No creditable response given.`
        } as CheckerResult;
    }

    return {
        status: "PA",
        message: "Partial credit",
        partial: score / total
    } as CheckerResult;
}