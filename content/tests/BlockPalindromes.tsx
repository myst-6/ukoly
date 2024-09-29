import { Test } from './base';

export const TestBlockPalindromes: Test[] = [
    {
        input: "BBACBB",
        output: "3",
        points: 2
    },
    {
        input: "XX",
        output: "1",
        points: 2
    },
    {
        input: "YZ",
        output: "0",
        points: 2
    },
    {
        input: "OLYMPIAD",
        output: "0",
        points: 2
    },
    {
        input: "RACECAR",
        output: "3",
        points: 2
    },
    {
        input: "KKKKKKK",
        output: "7",
        points: 2
    },
    {
        input: "BBIIOIIBB",
        output: "9",
        points: 2
    },
    {
        input: "PPPQQQQPPP",
        output: "19",
        points: 2
    },
    {
        input: "AAAAAAAAAA",
        output: "31",
        points: 2
    },
    {
        input: "SKIBIDI",
        output: "0",
        points: 2,
    },
    {
        input: "ONIONION",
        output: "2",
        points: 2
    },
    {
        input: "ABCDEDCBA",
        output: "4",
        points: 2
    }
]
