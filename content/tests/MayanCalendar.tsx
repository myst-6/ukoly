import { Test } from './base';

export const TestMayanCalendar: Test[] = [
    {
        input: "13 20 9 2 9",
        output: "22 3 2001",
        points: 2
    },
    {
        input: "13 20 7 16 3",
        output: "1 1 2000",
        points: 2
    },
    {
        input: "13 20 7 16 12",
        output: "10 1 2000",
        points: 2
    },
    {
        input: "13 20 7 18 3",
        output: "10 2 2000",
        points: 2
    },
    {
        input: "13 20 8 11 8",
        output: "22 9 2000",
        points: 2
    },
    {
        input: "13 20 16 3 4",
        output: "29 2 2008",
        points: 2
    },
    {
        input: "13 20 14 6 9",
        output: "15 5 2006",
        points: 2
    },
    {
        input: "14 1 1 1 1",
        output: "21 12 2012",
        points: 2
    },
    {
        input: "14 1 14 14 14",
        output: "14 7 2026",
        points: 2
    },
    {
        input: "13 20 14 1 2",
        output: "28 1 2006",
        points: 2
    },
    {
        input: "14 1 4 1 8",
        output: "13 12 2015",
        points: 2
    },
    {
        input: "13 20 9 6 9",
        output: "10 6 2001",
        points: 2
    }
];
