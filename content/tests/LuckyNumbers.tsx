import { Test } from './base';

export const TestLuckyNumbers: Test[] = [
    {
        input: "5",
        output: "3 7",
        points: 1
    },
    {
        input: "33",
        output: "31 37",
        points: 2
    },
    {
        input: "34",
        output: "33 37",
        points: 2
    },
    {
        input: "399",
        output: "393 409",
        points: 2
    },
    {
        input: "456",
        output: "451 463",
        points: 2
    },
    {
        input: "3301",
        output: "3297 3307",
        points: 2
    },
    {
        input: "3304",
        output: "3301 3307",
        points: 2
    },
    {
        input: "9703",
        output: "9691 9727",
        points: 3
    },
    {
        input: "10000",
        output: "9999 10003",
        points: 3
    },
    {
        input: "69",
        output: "67 73",
        points: 3
    },
    {
        input: "420",
        output: "421 415",
        points: 3
    }
];
