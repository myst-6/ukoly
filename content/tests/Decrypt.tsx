import { Test } from './base';

export const TestDecrypt: Test[] = [
    {
        input: "ESVNMCW",
        output: "ENCRYPT",
        points: 1
    },
    {
        input: "H",
        output: "H",
        points: 2
    },
    {
        input: "ZT",
        output: "ZT",
        points: 2
    },
    {
        input: "IO",
        output: "IF",
        points: 2
    },
    {
        input: "AA",
        output: "AZ",
        points: 2
    },
    {
        input: "BIO",
        output: "BGF",
        points: 2
    },
    {
        input: "TCCCB",
        output: "TIZZY",
        points: 2
    },
    {
        input: "CRFZEXR",
        output: "CONTEST",
        points: 2
    },
    {
        input: "CONTEST",
        output: "CLYFKNA",
        points: 2
    },
    {
        input: "ABCDEFGHIJ",
        output: "AAAAAAAAAA",
        points: 2
    },
    {
        input: "STRAWBERRY",
        output: "SAXIVECMZG",
        points: 2
    }
];
