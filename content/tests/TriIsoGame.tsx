import { Test } from './base';

export const TestTriIsoGame: Test[] = [
    {
        input: "2 5\n16 2",
        output: "1\n0\n8",
        points: 2
    },
    {
        input: "1 1\n1",
        output: "0\n4",
        points: 4
    },
    {
        input: "1 3\n1",
        output: "1\n6",
        points: 4
    },
    {
        input: "1 36\n3",
        output: "17\n21",
        points: 2
    },
    {
        input: "1 1250\n15",
        output: "989\n216",
        points: 2
    },
    {
        input: "2 2\n5 7",
        output: "0\n0\n5",
        points: 2
    },
    {
        input: "2 16\n11 13",
        output: "0\n0\n15",
        points: 2
    },
    {
        input: "2 2000\n5 13",
        output: "474\n478\n275",
        points: 2
    },
    {
        input: "3 2222\n13 19 23",
        output: "207\n220\n222\n292",
        points: 2
    },
    {
        input: "5 4999\n2 3 5 7 11",
        output: "84\n73\n71\n91\n135\n382",
        points: 2
    }
];
