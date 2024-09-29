import { Test } from "content";
import { Checker, CheckerResult } from "./base";

export const luckyNumbersChecker: Checker = (test: Test, out: string) => {
    const testOutput = test.output.trim();
    out = out.trim();
    let expectedTokens = testOutput.split(" ");
    let outputTokens = out.split(" ");

    if (outputTokens.length !== 2) {
        return {
            status: "WA",
            message: `Expected 2 numbers, got ${outputTokens.length}`
        } as CheckerResult;
    }

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