import { Test } from './base';

export const TestRomanLookAndSay: Test[] = [
    {
        input: "MMXX 3",
        output: "6 2",
        points: 1
    },
    {
        input: "C 1",
        output: "1 0",
        points: 1
    },
    {
        input: "V 1",
        output: "1 1",
        points: 2
    },
    {
        input: "III 2",
        output: "2 1",
        points: 2
    },
    {
        input: "I 7",
        output: "6 2",
        points: 2
    },
    {
        input: "MMXX 8",
        output: "30 12",
        points: 2
    },
    {
        input: "II 20",
        output: "101 37",
        points: 2
    },
    {
        input: "IV 20",
        output: "121 46",
        points: 2
    },
    {
        input: "MDCLX 30",
        output: "1795 695",
        points: 2
    },
    {
        input: "M 50",
        output: "2858 1103",
        points: 2
    },
    {
        input: "V 50",
        output: "2858 1104",
        points: 2
    },
    {
        input: "MMDCCCLXXXVIII 50",
        output: "19013 7333",
        points: 2
    }
];
