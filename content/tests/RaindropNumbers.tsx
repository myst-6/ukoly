import { Test } from './base';

export const TestRaindropNumbers: Test[] = [
    {
        input: "99",
        output: "45",
        points: 1
    },
    {
        input: "9",
        output: "0",
        points: 2
    },
    {
        input: "56",
        output: "15",
        points: 2
    },
    {
        input: "6000",
        output: "3756",
        points: 2
    },
    {
        input: "345678",
        output: "84835",
        points: 2
    },
    {
        input: "23456780",
        output: "1120614",
        points: 2
    },
    {
        input: "1234567890",
        output: "8330472",
        points: 2
    },
    {
        input: "112233445566",
        output: "57604755",
        points: 2
    },
    {
        input: "81020268102026",
        output: "803205280",
        points: 3
    },
    {
        input: "12345678987654321",
        output: "5413024975",
        points: 3
    },
    {
        input: "8877665544332211999",
        output: "35167216965",
        points: 3
    }
];
