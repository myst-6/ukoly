import { Test } from './base';

export const TestUnlock: Test[] = [
    {
        input: "mnoqRTwxy",
        output: "",
        points: 1,
    },
    {
        input: "N",
        output: "IMPOSSIBLE",
        points: 2,
    },
    {
        input: "abcdef",
        output: "IMPOSSIBLE",
        points: 2
    },
    {
        input: "ABF",
        output: "",
        points :2
    },
    {
        input: "gklmq",
        output: "",
        points: 2
    },
    {
        input: "ghkLNQSTwXy",
        output: "",
        points: 3
    },
    {
        input: "ghkLmNrTWXy",
        output: "",
        points: 3
    },
    {
        input: "abrs",
        output: "",
        points: 4
    },
    {
        input: "deHi",
        output: "",
        points: 5
    }
];
