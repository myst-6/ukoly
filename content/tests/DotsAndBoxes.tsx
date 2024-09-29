import { Test } from './base';

export const TestDotsAndBoxes: Test[] = [
    {
        input: "4 10 14 23 46",
        output: "OXX*O\n*X***\n*****\nX***X\nX***X\n7 2",
        points: 2
    },
    {
        input: "5 4 3 2 1",
        output: "*****\n*****\n*****\n*****\n*****\n0 0",
        points: 2
    },
    {
        input: "1 2 2 2 8",
        output: "**O**\n*****\n*****\n*****\n*****\n0 1",
        points: 2
    },
    {
        input: "36 1 36 1 13",
        output: "X****\n*****\n*****\n*****\n*****\n1 0",
        points: 3
    },
    {
        input: "36 1 36 1 22",
        output: "XXXXX\nXO***\n*****\n*****\n*****\n6 1",
        points: 3
    },
    {
        input: "1 2 3 4 54",
        output: "XX*XO\nOX*OX\nOX*XX\nXX*X*\nOX***\n12 5",
        points: 3
    },
    {
        input: "12 3 7 2 60",
        output: "OOOOO\nOOOXX\nXXOOX\nXXOOX\nXXOOX\n11 14",
        points: 3
    },
    {
        input: "6 10 5 6 60",
        output: "OXXOO\nOXXOO\nXXOXO\nXXOXO\nXXOXO\n13 12",
        points: 3
    },
    {
        input: "33 10 33 8 60",
        output: "OXOXX\nOXXXX\nOXXXX\nOXXXX\nXXXXX\n20 5",
        points: 3
    }
];
