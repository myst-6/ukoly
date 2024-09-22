import { Test } from './base';

export const TestStringRewriting: Test[] = [
    {
        input: "DEC\n2 10",
        output: "0 0 3 3 4",
        points: 1
    },
    {
        input: "BDA\n1 5",
        output: "1 2 1 1 0",
        points: 1
    },
    {
        input: "ABA\n5 29",
        output: "11 18 0 0 0",
        points: 2
    },
    {
        input: "EEE\n10 3072",
        output: "0 0 0 0 3072",
        points: 2
    },
    {
        input: "CDD\n12 12001",
        output: "0 0 6000 6001 0",
        points: 2
    },
    {
        input: "CDC\n12 12001",
        output: "0 0 6001 6000 0",
        points: 2
    },
    {
        input: "ACE\n15 987",
        output: "377 610 0 0 0",
        points: 2
    },
    {
        input: "ACE\n15 17371",
        output: "377 610 8192 8192 0",
        points: 2
    },
    {
        input: "ACE\n15 66523",
        output: "377 610 16384 16384 32768",
        points: 2
    },
    {
        input: "DAE\n29 1",
        output: "0 0 0 1 0",
        points: 1
    },
    {
        input: "EEE\n29 1000000000",
        output: "0 0 0 0 1000000000",
        points: 2
    },
    {
        input: "BAB\n29 1664080",
        output: "635622 1028458 0 0 0",
        points: 2
    },
    {
        input: "BED\n29 1000000000",
        output: "514229 832040 230891410 230891409 536870912",
        points: 4
    }
];