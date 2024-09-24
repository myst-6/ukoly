import { Test } from "content";
import { Checker } from "./base";

export const unlockChecker: Checker = (test: Test, out: string) => {
    const input = test.input.trim();
    const got = out.trim();
    const expected = test.output.trim();
    if (expected === "IMPOSSIBLE") {
        if (got.toLowerCase() === "impossible") {
            return {
                status: "AC",
                message: "OK"
            };
        }
    }

    if (/[^a-yA-Y]/.test(got)) {
        return {
            status: "WA",
            message: "Invalid characters in output."
        };
    }

    const deltas = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
        [0, 0]
    ]

    let currGrid : number[][] = Array.from({ length: 5 }, () => Array(5).fill(0));
    for (const char of input) {
        const index = char.toLowerCase().charCodeAt(0) - 97;
        const count = char === char.toUpperCase() ? 2 : 1;

        for (let i = 0; i < count; i++) {
            const row = Math.floor(index / 5);
            const col = index % 5;
            currGrid[row]![col] = count;
        }
    }

    for (const char of got) {
        const index = char.toLowerCase().charCodeAt(0) - 97;
        const count = char === char.toUpperCase() ? 2 : 1;

        for (let i = 0; i < count; i++) {
            const row = Math.floor(index / 5);
            const col = index % 5;

            for (let d=0; d<5; d++) {
                const newRow = row + deltas[d]![0]!;
                const newCol = col + deltas[d]![1]!;
                if (newRow >= 0 && newRow < 5 && newCol >= 0 && newCol < 5) {
                    currGrid[newRow]![newCol] = (currGrid[newRow]![newCol]! + 1) % 3;
                }
            }
        }
    }

    for (let row=0; row<5; row++) {
        for (let col=0; col<5; col++) {
            if (currGrid[row]![col] !== 0) {
                return {
                    status: "WA",
                    message: `This does not produce a solve.`
                };
            }
        }
    }

    return {
        status: "AC",
        message: `OK 1 line`
    };
}