import { Test } from './base';

export const TestColouredTriangles: Test[] = [
    {
        input: "R",
        output: "R",
        points: 2
    },
    {
        input: "GG",
        output: "G",
        points: 1
    },
    {
        input: "GR",
        output: "B",
        points: 1
    },
    {
        input: "RRR",
        output: "R",
        points: 1
    },
    {
        input: "RGB",
        output: "G",
        points: 2
    },
    {
        input: "BGGRB",
        output: "B",
        points: 2
    },
    {
        input: "BRGRBG",
        output: "G",
        points: 2
    },
    {
        input: "GGGGGG",
        output: "G",
        points: 2
    },
    {
        input: "GRBRBRBRBR",
        output: "B",
        points: 2 
    },
    {
        input: "RBGBGBGBGR",
        output: "R",
        points: 2
    },
    {
        input: "BRBG",
        output: "R",
        points: 2
    },
    {
        input: "GRBRBGRB",
        output: "B",
        points: 2
    },
    {
        input: "RGBRGBRGB",
        output: "G",
        points: 2
    }
];
