import { Test } from './base';

export const TestMovieMagic: Test[] = [
    {
        input: "2\n3 2",
        output: "5",
        points: 1
    },
    {
        input: "1\n8",
        output: "1",
        points: 2
    },
    {
        input: "8\n1 1 1 1 1 1 1 1",
        output: "1",
        points: 2
    },
    {
        input: "3\n3 3 3",
        output: "42",
        points: 3
    },
    {
        input: "5\n3 3 2 2 1",
        output: "990",
        points: 3
    },
    {
        input: "4\n4 4 2 2",
        output: "2640",
        points: 3
    },
    {
        input: "8\n8 1 1 1 1 1 1 1",
        output: "3432",
        points: 3
    },
    {
        input: "5\n5 4 3 2 1",
        output: "292864",
        points: 4
    },
    {
        input: "6\n5 4 2 2 2 1",
        output: "630630",
        points: 4
    }
];
