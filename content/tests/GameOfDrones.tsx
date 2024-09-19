import { Test } from './base';

export const TestGameOfDrones: Test[] = [
    {
        input: "9 3\n3 1",
        output: "6\n6",
        points: 1
    },
    {
        input: "2 11\n0 0",
        output: "0\n0",
        points: 1
    },
    {
        input: "1 1\n1 0",
        output: "1\n2",
        points: 2
    },
    {
        input: "1 1\n4 0",
        output: "1\n3",
        points: 2
    },
    {
        input: "2 23\n28 0",
        output: "9\n8",
        points: 2
    },
    {
        input: "11 5\n20 0",
        output: "17\n7",
        points: 2
    },
    {
        input: "25 24\n999 0",
        output: "1\n24",
        points: 2
    },
    {
        input: "2 11\n0 1",
        output: "2\n2",
        points: 1
    },
    {
        input: "16 25\n7 3",
        output: "14\n9",
        points: 2
    },
    {
        input: "25 15\n3 13",
        output: "10\n13",
        points: 2
    },
    {
        input: "18 6\n53 3",
        output: "9\n13",
        points: 2
    },
    {
        input: "25 24\n11 3",
        output: "7\n16",
        points: 2
    },
    {
        input: "7 1\n73 3",
        output: "7\n7",
        points: 2
    },
    {
        input: "1 2\n41 15",
        output: "9\n2",
        points: 2
    },
    {
        input: "1 14\n31 19",
        output: "5\n3",
        points: 2
    },
];
