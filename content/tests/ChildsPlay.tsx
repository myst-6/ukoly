import { Test } from './base';

export const TestChildsPlay: Test[] = [
    {
        input: "4 5",
        output: "2 1 1",
        points: 1
    },
    {
        input: "1 1",
        output: "1",
        points: 2
    },
    {
        input: "5 1",
        output: "1 1 1 1 1",
        points: 2
    },
    {
        input: "6 32",
        output: "6",
        points: 2,
    },
    {
        input: "7 63",
        output: "6 1",
        points: 2
    },
    {
        input: "8 74",
        output: "2 1 2 1 2",
        points: 2
    },
    {
        input: "12 1752",
        output: "3 3 3 3",
        points: 2
    },
    {
        input: "14 5000",
        output: "2 1 4 1 4 1 1",
        points: 2
    },
    {
        input: "21 1000000",
        output: "5 3 3 2 1 2 2 1 2",
        points: 2
    },
    {
        input: "27 50789789",
        output: "3 1 1 2 2 1 1 4 4 1 7",
        points: 3
    },
    {
        input: "32 1234567890",
        output: "2 1 2 3 1 4 2 1 5 3 3 3 2",
        points: 3
    }
];
