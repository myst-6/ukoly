import { Test } from './base';

export const TestDigitWords: Test[] = [
    {
        input: "BOUNCE",
        output: "1",
        points: 1
    },
    {
        input: "ENCODE",
        output: "NO",
        points: 1
    },
    {
        input: "EIGHT",
        output: "8",
        points: 2
    },
    {
        input: "BLACKJACK",
        output: "NO",
        points: 2
    },
    {
        input: "FABULOUS",
        output: "NO",
        points: 2
    },
    {
        input: "EXERCISE",
        output: "NO",
        points: 2
    },
    {
        input: "DRIFTWOOD",
        output: "2",
        points: 2,
    },
    {
        input: "SERVICEMAN",
        output: "7",
        points: 2
    },
    {
        input: "INSIGNIFICANCE",
        output: "9",
        points: 2
    },
    {
        input: "THROWDOWN",
        output: "2",
        points: 2
    }
];
