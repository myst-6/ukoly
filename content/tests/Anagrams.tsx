import { Test } from './base';

export const TestAnagrams: Test[] = [
    {
        input: "OLYMPIAD\nOLYMPIAD",
        output: "Anagrams",
        points: 1
    },
    {
        input: "LEMON\nMELON",
        output: "Anagrams",
        points: 2
    },
    {
        input: "COVERSLIP\nSLIPCOVER",
        output: "Anagrams",
        points: 2
    },
    {
        input: "TEARDROP\nPREDATOR",
        output: "Anagrams",
        points: 2
    },
    {
        input: "ABBCCCDDD\nDDDCCCBBA",
        output: "Anagrams",
        points: 2
    },
    {
        input: "I\nA",
        output: "Not anagrams",
        points: 1
    },
    {
        input: "FORTY\nFORT",
        output: "Not anagrams",
        points: 2
    },
    {
        input: "ONE\nSIX",
        output: "Not anagrams",
        points: 2
    },
    {
        input: "GREEN\nRANGE",
        output: "Not anagrams",
        points: 2
    },
    {
        input: "ABBCCCDDD\nAAABBBCCD",
        output: "Not anagrams",
        points: 2
    },
    {
        input: "AMERICAN\nCINERAMA",
        output: "Anagrams",
        points: 2
    },
    {
        input: "SKIBIDI\nSKI",
        output: "Not anagrams",
        points: 2
    },
    {
        input: "SIXTYNINE\nFOURTWENT",
        output: "Not anagrams",
        points: 2
    }
];
