import { Test } from './base';

export const TestPromenadeFractions: Test[] = [
    {
        input: "L",
        output: "1 / 2",
        points: 1
    },
    {
        input: "R",
        output: "2 / 1",
        points: 1
    },
    {
        input: "LRLL",
        output: "4 / 7",
        points: 1
    },
    {
        input: "LLRLR",
        output: "5 / 13",
        points: 2
    },
    {
        input: "LLLRRR",
        output: "4 / 13",
        points: 2
    },
    {
        input: "LLRRLL",
        output: "7 / 17",
        points: 2
    },
    {
        input: "RRRLRRR",
        output: "19 / 5",
        points: 2
    },
    {
        input: "LLLLRLLLL",
        output: "6 / 29",
        points: 2
    },
    {
        input: "LLLLLLLLLL",
        output: "1 / 11",
        points: 2
    },
    {
        input: "LRLRLRLRLR",
        output: "89 / 144",
        points: 2
    },
    {
        input: "RLLLRLR",
        output: "23 / 18",
        points: 2
    },
    {
        input: "LRRRLRL",
        output: "18 / 23",
        points: 2
    },
    {
        input: "RRRRRLLR",
        output: "27 / 5",
        points: 2
    }
];
