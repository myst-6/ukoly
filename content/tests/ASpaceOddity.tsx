import { Test } from './base';

export const TestASpaceOddity: Test[] = [
    {
        input: "1\n10",
        output: "10",
        points: 3
    },
    {
        input: "2\n8 13",
        output: "13",
        points: 3
    },
    {
        input: "3\n3 7 15",
        output: "25",
        points: 3
    },
    {
        input: "4\n10 15 20 25",
        output: "80",
        points: 3
    },
    {
        input: "4\n2 3 5 8",
        output: "19",
        points: 3
    },
    {
        input: "6\n4 23 40 41 80 90",
        output: "252",
        points: 3
    },
    {
        input: "7\n1 6 8 19 20 30 40",
        output: "101",
        points: 3
    },
    {
        input: "8\n1 20 38 39 95 96 97 98",
        output: "375",
        points: 3
    },
    {
        input: "8\n11 12 13 14 15 16 17 18",
        output: "165",
        points: 3
    }
];
