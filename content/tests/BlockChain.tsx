import { Test } from './base';

export const TestBlockChain: Test[] = [
    {
        input: "1 A",
        output: "1",
        points: 1
    },
    {
        input: "2 AB",
        output: "1",
        points: 1
    },
    {
        input: "2 BA",
        output: "1",
        points: 1
    },
    {
        input: "4 C",
        output: "5",
        points: 1
    },
    {
        input: "4 AB",
        output: "0",
        points: 1
    },
    {
        input: "6 FED",
        output: "5",
        points: 1
    },
    {
        input: "8 HGFEDCBA",
        output: "1",
        points: 1
    },
    {
        input: "8 H",
        output: "429",
        points: 1
    },
    {
        input: "8 FED",
        output: "28",
        points: 1
    },
    {
        input: "8 FEH",
        output: "42",
        points: 1
    },
    {
        input: "12 LKJI",
        output: "1430",
        points: 1
    },
    {
        input: "13 MH",
        output: "13260",
        points: 1
    },
    {
        input: "14 N",
        output: "742900",
        points: 2
    },
    {
        input: "16 KHF",
        output: "5508",
        points: 2
    },
    {
        input: "16 FEDCBA",
        output: "1",
        points: 2
    },
    {
        input: "18 FRN",
        output: "0",
        points: 2
    },
    {
        input: "18 QPON",
        output: "2674440",
        points: 2
    },
    {
        input: "18 R",
        output: "129644790",
        points: 2
    }    
];
