import { Test } from './base';

export const TestPalindromicNumbers: Test[] = [
    {
        input: "5",
        output: "6",
        points: 1
    },
    {
        input: "9",
        output: "11",
        points: 1
    },
    {
        input: "33",
        output: "44",
        points: 1
    },
    {
        input: "84",
        output: "88",
        points: 1
    },
    {
        input: "45653",
        output: "45654",
        points: 1
    },
    {
        input: "36460000",
        output: "36466463",
        points: 1
    },
    {
        input: "24355343",
        output: "24366342",
        points: 1
    },
    {
        input: "123450000",
        output: "123454321",
        points: 1
    },
    {
        input: "234567890",
        output: "234575432",
        points: 1
    },
    {
        input: "678999876",
        output: "679000976",
        points: 1
    },
    {
        input: "99999999999999",
        output: "100000000000001",
        points: 1
    },
    {
        input: "999999999999999",
        output: "1000000000000001",
        points: 1
    },
    {
        input: "123456789000000000",
        output: "123456789987654321",
        points: 2
    },
    {
        input: "987654321123456789",
        output: "987654322223456789",
        points: 2
    },
    {
        input: "1234567890000000000",
        output: "1234567890987654321",
        points: 2
    },
    {
        input: "9876543210123456789",
        output: "9876543211123456789",
        points: 2
    },
    {
        input: "9876543219123456789",
        output: "9876543220223456789",
        points: 2
    }
];

