import { Test } from './base';

export const TestDistinctPrimeFactorisation: Test[] = [
    {
        input: "100",
        output: "10",
        points: 1
    },
    {
        input: "101",
        output: "101",
        points: 1
    },
    {
        input: "2",
        output: "2",
        points: 2
    },
    {
        input: "1001",
        output: "1001",
        points: 2
    },
    {
        input: "371293",
        output: "13",
        points: 2
    },
    {
        input: "789774",
        output: "789774",
        points: 2
    },
    {
        input: "999883",
        output: "999883",
        points: 2
    },
    {
        input: "561125",
        output: "335",
        points: 3
    },
    {
        input: "661229",
        output: "4379",
        points: 3
    },
    {
        input: "696969",
        output: "232323",
        points: 2
    },
    {
        input: "420420",
        output: "30030",
        points: 2
    },
    {
        input: "69420",
        output: "34710",
        points: 2
    }
];
