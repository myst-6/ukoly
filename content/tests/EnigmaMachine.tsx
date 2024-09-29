import { Test } from './base';

export const TestEnigmaMachine: Test[] = [
    {
        input: "14\nAAABBB",
        output: "DBBDAD",
        points: 2
    },
    {
        input: "0\nA",
        output: "B",
        points: 2
    },
    {
        input: "0\nC",
        output: "D",
        points: 2
    },
    {
        input: "0\nAAAA",
        output: "BCBC",
        points: 3
    },
    {
        input: "0\nABCDABCDAB",
        output: "BDDBDABCBD",
        points: 3
    },
    {
        input: "12\nDDDDDD",
        output: "ACACCB",
        points: 3
    },
    {
        input: "255\nCCCCCCCC",
        output: "DDADABDB",
        points: 3
    },
    {
        input: "1234567\nABCDABCDAB",
        output: "BAACCCDABA",
        points: 3
    },
    {
        input: "2001001001\nABCDABCD",
        output: "CAAABCDC",
        points: 4
    }
];
