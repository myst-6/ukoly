import { Test } from './base';

export const TestNumberLadder: Test[] = [
    {
        input: "26 61\n1 94\n1 610",
        output: "1\n1\n2",
        points: 3
    },
    {
        input: "1 2\n1 3\n1 4",
        output: "1\n2\n1",
        points: 3
    },
    {
        input: "14 543\n5 75\n71 713",
        output: "2\n1\n1",
        points: 3
    },
    {
        input: "21 911\n329 927\n66 71",
        output: "2\n2\n3",
        points: 4 
    },
    {
        input: "250 361\n34 756\n18 735",
        output: "3\n4\n3",
        points: 4 
    },
    {
        input: "77 383\n48 677\n232 471",
        output: "5\n4\n4",
        points: 5 
    },
    {
        input: "220 691\n198 222\n410 666",
        output: "5\n5\n6",
        points: 5
    },
    {
        input: "402 788\n203 959\n404 777",
        output: "6\n6\n6",
        points: 6 
    }
];


