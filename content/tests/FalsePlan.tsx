import { Test } from './base';

export const TestFalsePlan: Test[] = [
    {
        input: "1 1 1\n1",
        output: "A",
        points: 1
    },
    {
        input: "1 12 12\n1",
        output: "AAAAAAAAAAAA",
        points: 1
    },
    {
        input: "2 1 8\n2",
        output: "BABABABA",
        points: 1
    },
    {
        input: "2 2 7\n1",
        output: "AABAABA",
        points: 1
    },
    {
        input: "2 2 12\n400",
        output: "BBAABBAABABA",
        points: 1
    },
    {
        input: "2 3 10\n500",
        output: "BBABBBAABB",
        points: 1
    },
    {
        input: "6 3 10\n1234567",
        output: "AAEDFEEEFD",
        points: 1
    },
    {
        input: "6 2 8\n567890",
        output: "CCADDCFA",
        points: 1
    },
    {
        input: "8 8 8\n16000111",
        output: "HFACCBFG",
        points: 1
    },
    {
        input: "6 2 12\n1666111000",
        output: "FFBBFFCCBCFA",
        points: 2
    },
    {
        input: "12 2 12\n9876543210",
        output: "AADACFGGLBJI",
        points: 2
    },
    {
        input: "10 10 10\n7654334567",
        output: "HGFEDDEFGG",
        points: 2
    },
    {
        input: "7 2 12\n11223344556",
        output: "GFEGAFFEADAF",
        points: 3
    },
    {
        input: "10 3 12\n223344556677",
        output: "CCFCFJIFIGHE",
        points: 3
    },
    {
        input: "11 4 12\n334455667788",
        output: "BBJKBCJGCGFE",
        points: 3
    },
    {
        input: "12 5 12\n3344554433999",
        output: "EGACGKCJHCFI",
        points: 3
    },
];
