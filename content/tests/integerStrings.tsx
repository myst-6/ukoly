import { Test } from './base';

export const TestIntegerStrings: Test[] = [
    {
        input: "999 11",
        output: "1",
        points: 1
    },
    {
        input: "1 1",
        output: "1",
        points: 1
    },
    {
        input: "98765 1",
        output: "9",
        points: 1
    },
    {
        input: "1 5",
        output: "5",
        points: 1
    },
    {
        input: "1 50",
        output: "3",
        points: 1
    },
    {
        input: "1 500",
        output: "0",
        points: 1
    },
    {
        input: "1 123456",
        output: "6",
        points: 2
    },
    {
        input: "1 9988776655443322",
        output: "6",
        points: 2
    },
    {
        input: "123 1000",
        output: "4",
        points: 2
    },
    {
        input: "123 87654321",
        output: "2",
        points: 2
    },
    {
        input: "1122 3456543",
        output: "7",
        points: 2
    },
    {
        input: "345 9988776655443322",
        output: "8",
        points: 2
    },
    {
        input: "22334455667788 11",
        output: "7",
        points: 2
    },
    {
        input: "12345678912345 987654321987",
        output: "9",
        points: 2
    }
];
