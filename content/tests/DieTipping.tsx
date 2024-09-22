import { Test } from './base';

export const TestDieTipping: Test[] = [
    {
        input: "123456789",
        output: "2 4 5 7 8",
        points: 1
    },
    {
        input: "100",
        output: "NO",
        points: 1
    },
    {
        input: "1",
        output: "NO",
        points: 2
    },
    {
        input: "148258",
        output: "NO",
        points: 2,
    },
    {
        input: "555",
        output: "NO",
        points: 2
    },
    {
        input: "1035",
        output: "3",
        points: 2
    },
    {
        input: "123876",
        output: "3 7",
        points: 2
    },
    {
        input: "142857",
        output: "2 3 4 5 6",
        points: 2
    },
    {
        input: "49271085",
        output: "2",
        points: 2
    },
    {
        input: "123450186",
        output: "7",
        points: 3
    }
];
