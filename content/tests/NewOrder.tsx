import { Test } from './base';

export const TestNewOrder: Test[] = [
    {
        input: "3 4",
        output: "11011",
        points: 1
    },
    {
        input: "1 0",
        output: "0",
        points: 2
    },
    {
        input: "20 1",
        output: "100000 000000 000000 00",
        points: 2
    },
    {
        input: "1 24",
        output: "111111 111111 111111 111111",
        points: 2
    },
    {
        input: "8 3",
        output: "11001",
        points: 2
    },
    {
        input: "1000 5",
        output: "100111 001000 0",
        points: 3
    },
    {
        input: "1000000 10",
        output: "110010 101011 010010 00010",
        points: 3
    },
    {
        input: "5000000 8",
        output: "100100 000101 100010 100000 100000",
        points: 3
    },
    {
        input: "77558760 15",
        output: "111111 111111 111000 000000 00000",
        points: 3
    },
    {
        input: "134798 28",
        output: "111101 111111 101111 011111 110110 111",
        points: 3
    },
    {
        input: "69420 12",
        output: "101011 101001 001111 10",
        points: 3
    }
];

