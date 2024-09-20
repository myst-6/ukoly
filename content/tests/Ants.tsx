import { Test } from './base';

export const TestAnts: Test[] = [  // these are WRONG! Fix please.
    {
        input: "12 0 3 4\n1 32 4 0",
        output: "3",
        points: 1
    },
    {
        input: "12 0 34 0\n12 0 34 0",
        output: "0",
        points: 2
    },
    {
        input: "1 23 0 4\n1 2 0 43",
        output: "1",
        points: 2
    },
    {
        input: "1 2 3 4\n0 2 3 41",
        output: "1",
        points: 2
    },
    {
        input: "1 2 3 4\n1 3 2 4",
        output: "3",
        points: 2
    },
    {
        input: "4 3 2 1\n3 2 4 1",
        output: "4",
        points: 2
    },
    {
        input: "0 0 241 3\n0 4 1 32",
        output: "4",
        points: 2
    },
    {
        input: "0 4 0 123\n12 3 4 0",
        output: "5",
        points: 2
    },
    {
        input: "1234 0 0 0\n4 213 0 0",
        output: "6",
        points: 2
    },
    {
        input: "12 3 4 0\n21 0 34 0",
        output: "7",
        points: 2
    },
    {
        input: "1234 0 0 0\n0 0 0 1234",
        output: "7",
        points: 2
    },
    {
        input: "1234 0 0 0\n4321 0 0 0",
        output: "9",
        points: 2
    }
];
