import { Test } from './base';

export const TestModernArt: Test[] = [
    {
        input: "1 2 1 0 8",
        output: "BCAB",
        points: 1
    },
    {
        input: "1 0 0 0 1",
        output: "A",
        points: 2
    },
    {
        input: "1 1 0 0 2",
        output: "BA",
        points: 2
    },
    {
        input: "0 3 0 3 12",
        output: "DBBDBD",
        points: 2
    },
    {
        input: "5 5 0 0 56",
        output: "AABBBBBAAA",
        points: 2
    },
    {
        input: "2 2 2 2 2520",
        output: "DDCCBBAA",
        points: 2
    },
    {
        input: "2 3 4 5 1234567",
        output: "CCBDBDACDADBCD",
        points: 4
    },
    {
        input: "5 4 4 4 123456789",
        output: "CACBDAABDACBADCBD",
        points: 5
    },
    {
        input: "5 5 5 5 11223344556",
        output: "DDACBBABCDDDCAABCCBA",
        points: 5
    }
];
