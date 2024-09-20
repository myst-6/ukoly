import { Test } from './base';

export const TestParking: Test[] = [
    {
        input: "cabd 5",
        output: "BCAA",
        points: 1
    },
    {
        input: "a 1",
        output: "A",
        points: 2
    },
    {
        input: "dacb 2",
        output: "BDCA",
        points: 2
    },
    {
        input: "fedcba 1",
        output: "FEDCBA",
        points: 2
    },
    {
        input: "badcef 90",
        output: "BADCEF",
        points: 2
    },
    {
        input: "dabcefgh 5000",
        output: "BBDAEFBH",
        points: 2
    },
    {
        input: "hefbdciajg 125",
        output: "HDFDBCJAGH",
        points: 2
    },
    {
        input: "bcadefghi 49999",
        output: "CAADBDBDD",
        points: 2
    },
    {
        input: "bcdefghijak 1000000",
        output: "JAABCAACFAA",
        points: 2
    },
    {
        input: "acbdefghijk 12345678",
        output: "ACBDCAEGDED",
        points: 2
    },
    {
        input: "abcdeghfklijnmop 2800700600",
        output: "ABCDDHEDKKAANFMH",
        points: 3
    },
    {
        input: "abcdefghijklmnop 12345678901234",
        output: "ABACAEFHBFJAMLCB",
        points: 3
    }
];
