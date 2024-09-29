import { Test } from './base';

export const TestPrimeConnections: Test[] = [
    {
        input: "100 2 13",
        output: "4",
        points: 1
    },
    {
        input: "20 2 3",
        output: "2",
        points: 2
    },
    {
        input: "20 2 13",
        output: "4",
        points: 2
    },
    {
        input: "100 73 89",
        output: "2",
        points: 2
    },
    {
        input: "100 19 97",
        output: "7",
        points: 2
    },
    {
        input: "1000 3 971",
        output: "9",
        points: 2
    },
    {
        input: "2000 977 997",
        output: "4",
        points: 2
    },
    {
        input: "5000 83 3643",
        output: "10",
        points: 2
    },
    {
        input: "614700 3643 90149",
        output: "18",
        points: 3
    },
    {
        input: "987654 3643 90149",
        output: "16",
        points: 3
    },
    {
        input: "1000000 2 968137",
        output: "18",
        points: 3
    },
    {
        input: "1000000 993851 995387",
        output: "3",
        points: 3
    }
];
