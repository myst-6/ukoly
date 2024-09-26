import { Test } from './base';

export const TestMigration: Test[] = [
    {
        input: "8 1 4\n0",
        output: "0 0 1 0 0\n0 1 0 1 0\n0 0 1 0 0\n0 0 0 0 0\n0 0 0 0 0",
        points: 2
    },
    {
        input: "6 3 18\n3 5 11",
        output: "1 1 1 1 0\n1 1 1 2 1\n0 0 1 1 1\n1 0 0 1 0\n1 1 0 0 1",
        points: 3
    },
    {
        input: "12 2 7\n1 24",
        output: "0 0 0 0 0\n0 1 1 0 0\n1 1 0 1 0\n0 1 1 0 0\n0 0 0 0 0",
        points: 3
    },
    {
        input: "7 3 23\n2 9 14",
        output: "0 2 1 2 0\n2 1 0 1 2\n0 2 2 2 0\n0 1 3 1 0\n0 0 1 0 0",
        points: 3
    },
    {
        input: "1 4 61\n4 16 4 1",
        output: "0 1 1 3 3\n1 2 0 0 3\n1 0 0 0 0\n3 0 0 0 3\n3 3 0 3 3",
        points: 3
    },
    {
        input: "18 5 76\n2 2 24 23 4",
        output: "1 3 3 3 1\n3 1 2 1 3\n3 2 3 2 3\n3 1 3 1 3\n1 3 3 3 1",
        points: 3
    },
    {
        input: "3 6 150\n2 3 5 7 11 13",
        output: "2 3 2 3 2\n3 2 2 2 3\n2 2 2 2 2\n3 2 2 2 3\n2 3 2 3 2",
        points: 3
    },
    {
        input: "3 6 999\n2 3 5 7 11 13",
        output: "2 3 5 7 11 13",
        points: 4
    }
];
