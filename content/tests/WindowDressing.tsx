import { Test } from './base';

export const TestWindowDressing: Test[] = [
    {
        input: "ACBD",
        output: "6",
        points: 1
    },
    {
        input: "A",
        output: "1",
        points: 1
    },
    {
        input: "AB",
        output: "2",
        points: 1
    },
    {
        input: "BA",
        output: "3",
        points: 1
    },
    {
        input: "ACB",
        output: "5",
        points: 1
    },
    {
        input: "DCBA",
        output: "8",
        points: 1
    },
    {
        input: "ABCDEFGH",
        output: "8",
        points: 2
    },
    {
        input: "BACDE",
        output: "6",
        points: 2
    },
    {
        input: "AEDBC",
        output: "12",
        points: 2
    },
    {
        input: "BACDEFGH",
        output: "9",
        points: 2
    },
    {
        input: "CFBGAHDE",
        output: "15",
        points: 2
    },
    {
        input: "GADEFBC",
        output: "16",
        points: 2
    },
    {
        input: "GCFBEDA",
        output: "21",
        points: 2
    },
    {
        input: "CHDGABFE",
        output: "23",
        points: 2
    },
    {
        input: "AHGEFDCB",
        output: "27",
        points: 2
    }
];
