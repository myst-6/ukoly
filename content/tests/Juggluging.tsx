import { Test } from './base';

export const TestJuggluging: Test[] = [
    {
        input: "2 4\n3 5",
        output: "6",
        points: 1
    },
    {
        input: "1 20\n20",
        output: "1",
        points: 2
    },
    {
        input: "2 10\n10 20",
        output: "1",
        points: 2
    },
    {
        input: "2 10\n1 30",
        output: "20",
        points: 2
    },
    {
        input: "2 15\n1 20",
        output: "10",
        points: 2,
    },
    {
        input: "2 9\n249 18",
        output: "86",
        points: 2
    },
    {
        input: "3 48\n158 62 14",
        output: "2",
        points: 2,
    },
    {
        input: "3 24\n158 62 14",
        output: "27",
        points: 2
    },
    {
        input: "2 3\n31 79",
        output: "12",
        points: 2
    },
    {
        input: "2 19\n31 79",
        output: "56",
        points: 3
    },
    {
        input: "3 13\n241 181 31",
        output: "40",
        points: 3
    }
];
