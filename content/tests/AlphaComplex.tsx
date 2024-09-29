import { Test } from './base';

export const TestAlphaComplex: Test[] = [
    {
        input: "A 1 2",
        output: "BC\nA\nA\nBA",
        points: 2
    },
    {
        input: "C 4 8",
        output: "C\nC\nAB\nBB",
        points: 2
    },
    {
        input: "BC 4 9",
        output: "B\nAC\nBD\nC\nCD",
        points: 2
    },
    {
        input: "BBACC 10 1010",
        output: "BC\nADE\nAFG\nB\nB\nC\nC\nFG",
        points: 3
    },
    {
        input: "ABCD 50 51",
        output: "BE\nAC\nBD\nCF\nA\nD\nCD",
        points: 3
    },
    {
        input: "FEDC 2020 876543",
        output: "F\nE\nDF\nCE\nBD\nAC\nCB",
        points: 3
    },
    {
        input: "AABGB 5000 9999",
        output: "BCD\nAFG\nA\nA\nG\nB\nBE\nAB",
        points: 3
    },
    {
        input: "CDCDCD 2020 876543",
        output: "C\nD\nADEG\nBCFH\nC\nD\nC\nD\nDH",
        points: 3
    },
    {
        input: "FFFFFFFF 512 1022",
        output: "F\nF\nF\nF\nF\nABCDEGHIJ\nF\nF\nF\nF\nJA",
        points: 3
    }
];
