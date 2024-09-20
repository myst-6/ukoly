import { Test } from './base';

export const TestPasswords: Test[] = [
    {
        input: "A",
        output: "Accepted",
        points: 2
    },
    {
        input: "LONDON",
        output: "Accepted",
        points: 2
    },
    {
        input: "BIOGRAPHY",
        output: "Accepted",
        points: 2
    },
    {
        input: "APRICOT",
        output: "Accepted",
        points: 2
    },
    {
        input: "AA",
        output: "Rejected",
        points: 2
    },
    {
        input: "QUININE",
        output: "Rejected",
        points: 2
    },
    {
        input: "RINGRING",
        output: "Rejected",
        points: 2
    },
    {
        input: "COMMITTEE",
        output: "Rejected",
        points: 2
    },
    {
        input: "SKIBIDI",
        output: "Accepted",
        points: 2
    },
    {
        input: "OHIO",
        output: "Accepted",
        points: 2
    },
    {
        input: "RIZZ",
        output: "Rejected",
        points: 2
    }
];
