import { Test } from "content";
import { Checker, CheckerResult } from "./base";

export const anagramNumbersChecker: Checker = (test: Test, out: string) => {
    const testOutput = test.output.trim();
    out = out.trim();
    if (testOutput === "NO") {
        if (out === "NO") {
            return {
                status: "AC",
                message: `OK 1 token`
            } as CheckerResult;
        }
        return {
            status: "WA",
            message: `Expected "NO", got ${out}`
        } as CheckerResult;
    }
    let expectedTokens = testOutput.split(" ");
    let outputTokens = out.split(" ");

    let expectedTokenNums: number[];
    let outputTokenNums: number[];
    try {
        expectedTokenNums = expectedTokens.map(token => {
            const num = parseInt(token, 10);
            if (isNaN(num)) {
                throw new Error(`Expected token "${token}" is not a valid number`);
            }
            return num;
        });

        outputTokenNums = outputTokens.map(token => {
            const num = parseInt(token, 10);
            if (isNaN(num)) {
                throw new Error(`Output token "${token}" is not a valid number`);
            }
            return num;
        });
    } catch (error) {
        return {
            status: "WA",
            message: `Expected integers, got ${outputTokens}`
        } as CheckerResult;
    }

    if (expectedTokenNums.length !== outputTokenNums.length) {
        return {
            status: "WA",
            message: `Expected ${expectedTokens.length} numbers, got ${outputTokens.length}`
        } as CheckerResult;
    }

    expectedTokenNums.sort((a, b) => a - b);
    outputTokenNums.sort((a, b) => a - b);

    for (let i = 0; i < expectedTokenNums.length; i++) {
        if (expectedTokenNums[i] !== outputTokenNums[i]) {
            return {
                status: "WA",
                message: `Expected ${expectedTokenNums[i]}, got ${outputTokenNums[i]}`
            } as CheckerResult;
        }
    }

    return {
        status: "AC",
        message: `OK 1 token`
    } as CheckerResult;
}