import { Test } from './base';

export const TestIncreasingPasswords: Test[] = [
    {
        input: "1",
        output: "A",
        points: 1
    },
    {
        input: "21",
        output: "U",
        points: 2
    },
    {
        input: "321",
        output: "JP",
        points: 2
    },
    {
        input: "4321",
        output: "HPQ",
        points: 2
    },
    {
        input: "54321",
        output: "LNOV",
        points: 2
    },
    {
        input: "654321",
        output: "AHJSVW",
        points: 2
    },
    {
        input: "7654321",
        output: "EHJK025",
        points: 2
    },
    {
        input: "87654321",
        output: "CEILRU059",
        points: 3
    },
    {
        input: "234234234",
        output: "BEHJPVX267",
        points: 4
    },
    {
        input: "987654321",
        output: "MNOPQTUX026",
        points: 5
    }
];
