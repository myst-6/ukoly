import { Test } from './base';

export const TestPlayingCodes: Test[] = [
    {
        input: "6 3 2 BB",
        output: "BD",
        points: 1
    },
    {
        input: "26 0 0 M",
        output: "M",
        points: 2
    },
    {
        input: "26 2 0 P",
        output: "W",
        points: 2
    },
    {
        input: "26 1 1 R",
        output: "E",
        points: 2
    },
    {
        input: "5 10 10 CAB",
        output: "CBE",
        points: 2
    },
    {
        input: "6 10 10 FADE",
        output: "ABFF",
        points: 2
    },
    {
        input: "9 30 2 ABCDE",
        output: "AHICD",
        points: 2
    },
    {
        input: "10 30 26 BADGE",
        output: "FFFEH",
        points: 3
    },
    {
        input: "19 2026 3 GARDNER",
        output: "NJFRAEG",
        points: 3
    },
    {
        input: "26 5000 51 SQUEAMISH",
        output: "MXBMVODHN",
        points: 3
    },
    {
        input: "20 1000 4 OSSIFRAGE",
        output: "DBOLRACBT",
        points: 3
    }
];
