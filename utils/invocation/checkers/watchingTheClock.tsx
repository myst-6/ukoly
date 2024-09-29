import { Test } from "content";
import { Checker, CheckerResult } from "./base";

export const watchingTheClockChecker: Checker = (test: Test, out: string) => {
    const exp = test.output.trim();
    out = out.trim();

    let [expH, expM] = exp.split(':').map(x => parseInt(x));
    let tokens = out.split(':');
    if (tokens.length !== 2) {
        return {
            status: "WA",
            message: `Expected format: HH:MM`
        } as CheckerResult;
    }

    let outH = parseInt(tokens[0]!);
    let outM = parseInt(tokens[1]!);

    if (expH === outH && expM === outM) {
        if (tokens[0]!.trim().length !== 2 || tokens[1]!.trim().length !== 2) {
            return {
                status: "PA",
                message: `Partial solution`,
                partial: 1 / test.points,
            } as CheckerResult;
        }
        return {
            status: "AC",
            message: `OK 2 tokens`
        } as CheckerResult;
    }
    else {
        return {
            status: "WA",
            message: `Incorrect time`
        } as CheckerResult;
    }
}
