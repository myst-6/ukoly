import { Test } from './base';

export const TestLoops: Test[] = [
    {
        input: "2\n3 4\n6 5",
        output: "0 4",
        points: 2
    },
    {
        input: "2\n2 4\n1 5",
        output: "0 0",
        points: 2
    },
    {
        input: "3\n3 4 6\n6 5 6\n4 4 3",
        output: "4 4",
        points: 3
    },
    {
        input: "3\n5 2 6\n1 6 1\n4 2 3",
        output: "8 0",
        points: 3
    },
    {
        input: "4\n5 6 5 6\n4 3 4 3\n5 6 5 6\n4 3 4 3",
        output: "16 4",
        points: 3
    },
    {
        input: "4\n5 6 3 4\n4 3 5 2\n5 6 4 2\n4 3 6 5",
        output: "8 10",
        points: 3
    },
    {
        input: "5\n3 3 1 4 4\n3 5 2 6 4\n2 1 1 1 2\n6 4 2 3 5\n6 6 1 5 5",
        output: "8 16",
        points: 4
    },
    {
        input: "6\n1 2 3 4 5 6\n5 6 6 5 4 3\n1 4 2 2 6 6\n4 2 6 3 1 4\n5 2 3 6 1 5\n4 2 2 2 3 3",
        output: "24 10",
        points: 5
    }
];
