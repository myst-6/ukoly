import { Test } from './base';

export const TestSerialNumbers: Test[] = [
    {
        input: "6\n461235",
        output: "6",
        points: 1
    },
    {
        input: "6\n412365",
        output: "3",
        points: 2
    },
    {
        input: "9\n123456789",
        output: "0",
        points: 2
    },
    {
        input: "1\n1",
        output: "0",
        points: 2
    },
    {
        input: "3\n132",
        output: "1",
        points: 2
    },
    {
        input: "5\n41235",
        output: "3",
        points: 2
    },
    {
        input: "6\n254631",
        output: "5",
        points: 2
    },
    {
        input: "7\n2756413",
        output: "9",
        points: 2
    },
    {
        input: "7\n7521436",
        output: "10",
        points: 2
    },
    {
        input: "8\n51438672",
        output: "8",
        points: 2
    },
    {
        input: "8\n51432687",
        output: "13",
        points: 2
    },
    {
        input: "9\n547389126",
        output: "19",
        points: 3
    }
];
