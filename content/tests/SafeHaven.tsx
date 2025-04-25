import { Test } from './base';

export const TestSafeHaven: Test[] = [
    {
        input: "3 5 5",
        output: "2 1",
        points: 1
    },
    {
        input: "1 100 200",
        output: "1 0",
        points: 2
    },
    {
        input: "2 1 1",
        output: "1 1",
        points: 2
    },
    {
        input: "2 7 23",
        output: "1 0",
        points: 2
    },
    {
        input: "4 8 94",
        output: "3 3",
        points: 2
    },
    {
        input: "6 213 1040",
        output: "3 6",
        points: 2
    },
    {
        input: "7 2025 7",
        output: "7 6",
        points: 2
    },
    {
        input: "8 19 22",
        output: "4 10",
        points: 3
    },
    {
        input: "9 510 4152",
        output: "9 5",
        points: 3
    },
    {
        input: "10 3548 872",
        output: "9 15",
        points: 3
    },
    {
        input: "10 4999 4999",
        output: "5 8",
        points: 3
    }
];
