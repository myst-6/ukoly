import { Test } from './base';

export const TestPlayingGames: Test[] = [
    {
        input: "4\n1 1 1 1\n1 1 1 1",
        output: "Impossible",
        points: 2
    },
    {
        input: "3\n1 3 5\n2 4 6",
        output: "Impossible",
        points: 2
    },
    {
        input: "6\n1 2 4 1 2 4\n1 3 5 1 3 5",
        output: "Impossible",
        points: 2
    },
    {
        input: "6\n1 2 2 3 3 4\n8 6 5 4 3 1",
        output: "1 2 3 4 5 6\n1 2 3 4 5 6",
        points: 2
    },
    {
        input: "4\n1 1 1 1\n1 4 5 8",
        output: "1 1 4 4\n1 1 5 5",
        points: 2
    },
    {
        input: "5\n6 3 5 2 4\n5 4 3 2 6",
        output: "1 2 3 4 5\n3 4 5 6 7",
        points: 2
    },
    {
        input: "1\n1\n6",
        output: "2\n5",
        points: 2
    },
    {
        input: "4\n1 7 3 5\n8 4 2 6",
        output: "1 3 3 5\n2 6 6 10",
        points: 2
    },
    {
        input: "8\n1 2 3 4 5 6 7 8\n1 2 3 4 5 6 7 8",
        output: "1 2 3 3 4 4 5 6\n1 2 5 5 6 6 9 10",
        points: 2
    },
    {
        input: "8\n7 5 3 1 1 3 5 7\n1 1 8 8 6 6 4 4",
        output: "1 1 1 1 3 3 3 3\n1 4 5 6 8 8 10 12",
        points: 2
    }
];
