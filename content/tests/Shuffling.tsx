import { Test } from './base';

export const TestShuffling: Test[] = [
    {
        input: "b",
        output: "2 3 4 5 6 7 8 1",
        points: 1
    },
    {
        input: "i",
        output: "5 1 6 2 7 3 8 4",
        points: 1
    },
    {
        input: "o",
        output: "1 5 2 6 3 7 4 8",
        points: 1
    },
    {
        input: "bioib",
        output: "6 1 8 3 2 5 4 7",
        points: 2
    },
    {
        input: "3i",
        output: "8 7 6 5 4 3 2 1",
        points: 2
    },
    {
        input: "2io",
        output: "7 8 5 6 3 4 1 2",
        points: 2
    },
    {
        input: "8b",
        output: "1 2 3 4 5 6 7 8",
        points: 1
    },
    {
        input: "b3oi",
        output: "6 2 7 3 8 4 1 5",
        points: 2
    },
    {
        input: "2(io)",
        output: "6 2 5 1 8 4 7 3",
        points: 2
    },
    {
        input: "b2(ib)o",
        output: "2 3 1 6 7 8 5 4",
        points: 2
    },
    {
        input: "3(i2(io)o)",
        output: "3 4 1 2 7 8 5 6",
        points: 2
    },
    {
        input: "4(4(io)2b)",
        output: "5 4 3 6 8 1 2 7",
        points: 2
    },
    {
        input: "5(6(bi)7(io))",
        output: "1 2 8 4 5 3 7 6",
        points: 2
    },
    {
        input: "2(3(4(io)b)b)b",
        output: "1 6 4 3 5 2 8 7",
        points: 2
    }
];