import { Test } from './base';

export const TestDecoderRing: Test[] = [
    {
        input: "5 ABCD",
        output: "EJOTYD\nEOYK",
        points: 2
    },
    {
        input: "1 A",
        output: "ABCDEF\nA",
        points: 2
    },
    {
        input: "2 Z",
        output: "BDFHJL\nU",
        points: 2
    },
    {
        input: "3 AZ",
        output: "CFILOR\nCC",
        points: 3
    },
    {
        input: "4 BIO",
        output: "DHLPTX\nHRO",
        points: 3
    },
    {
        input: "10 MZNOYW",
        output: "JTDOZL\nIJUVDT",
        points: 3
    },
    {
        input: "27 ABCDEF",
        output: "ACFJOU\nAFODYG",
        points: 3
    },
    {
        input: "31 ELEPHANT",
        output: "EKRZJV\nJPIOLVWE",
        points: 3
    },
    {
        input: "999999 MOON",
        output: "MKAFSR\nYDVV",
        points: 3
    }
];
