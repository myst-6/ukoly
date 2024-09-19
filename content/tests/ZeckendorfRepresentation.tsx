import { Test } from './base';

export const TestZeckendorfRepresentation: Test[] = [
    {
        input: "100",
        output: "89 8 3",
        points: 1
    },
    {
        input: "1",
        output: "1",
        points: 2
    },
    {
        input: "832040",
        output: "832040",
        points: 2
    },
    {
        input: "4",
        output: "3 1",
        points: 2
    },
    {
        input: "623",
        output: "610 13",
        points: 2
    },
    {
        input: "12",
        output: "8 3 1",
        points: 2
    },
    {
        input: "834629",
        output: "832040 2584 5",
        points: 2
    },
    {
        input: "33",
        output: "21 8 3 1",
        points: 2
    },
    {
        input: "2023",
        output: "1597 377 34 13 2",
        points: 2
    },
    {
        input: "5000",
        output: "4181 610 144 55 8 2",
        points: 2
    },
    {
        input: "514228",
        output: "317811 121393 46368 17711 6765 2584 987 377 144 55 21 8 3 1",
        points: 2
    }
];
