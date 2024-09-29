import { Test } from "content";
import { Checker } from "./base";

export const muTorereChecker: Checker = (test: Test, out: string) => {
    const parse = (str: string) => str.trim().split("\n").map(line => line.trim()).filter(line => !!line);
    const testLines = parse(test.input);
    const expLines = parse(test.output);
    const outLines = parse(out);

    if (expLines.length !== outLines.length) {
        return {
            status: "WA",
            message: `Expected ${expLines.length} lines, got ${outLines.length}`
        };
    }

    let score = 0, total = 0;
    for (let i = 0; i < expLines.length; i++) {
        let scoreDiff = 1;
        if (testLines[0] === "EXXXXOOOO" && expLines[i] === "Draw") {
            scoreDiff = 2;
        }
        if (testLines[0] === "XEOXXXOOO" && expLines[i] === "XOOXXXOOE") {
            scoreDiff = 2;
        }
        if (testLines[0] === "OOEXOOXXX" && expLines[i] === "XOXOOOXEX") {
            scoreDiff = 2;
        }
        if (testLines[0] === "EXOXOXXOO" && expLines[i] === "Draw") {
            scoreDiff = 3;
        }
    
        total += scoreDiff;
        if (outLines[i] === expLines[i]) {
            score += scoreDiff;
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