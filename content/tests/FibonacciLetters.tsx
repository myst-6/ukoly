import { Test } from './base';

export const TestFibonacciLetters: Test[] = [
    {
        input: "A A 7",
        output: "M",
        points: 1
    },
    {
        input: "A M 1",
        output: "A",
        points: 3
    },
    {
        input: "A A 8",
        output: "U",
        points: 2
    },
    {
        input: "P Q 101",
        output: "S",
        points: 2
    },
    {
        input: "Y Y 1000",
        output: "U",
        points: 2
    },
    {
        input: "Z M 5005",
        output: "Z",
        points: 2
    },
    {
        input: "K V 10000",
        output: "C",
        points: 2
    },
    {
        input: "K Y 20000",
        output: "W",
        points: 2
    },
    {
        input: "B I 987654",
        output: "W",
        points: 2
    },
    {
        input: "S K 18101",
        output: "Y",
        points: 2
    },
    {
        input: "R I 22",
        output: "L",
        points: 2
    },
    {
        input: "O H 10",
        output: "O",
        points: 2
    }
];
