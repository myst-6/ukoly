import { Test } from './base';

export const TestWatchingTheClock: Test[] = [
    {
        input: "1 31",
        output: "00:48",
        points: 1
    },
    {
        input: "0 0",
        output: "01:00",
        points: 2
    },
    {
        input: "18 18",
        output: "01:18",
        points: 2
    },
    {
        input: "67 1507",
        output: "02:07",
        points: 2
    },
    {
        input: "0 15",
        output: "00:00",
        points: 2
    },
    {
        input: "0 7",
        output: "00:00",
        points: 2
    },
    {
        input: "17 26",
        output: "13:20",
        points: 2
    },
    {
        input: "17 215",
        output: "06:40",
        points: 2
    },
    {
        input: "5779 5864",
        output: "19:12",
        points: 2
    },
    {
        input: "21923 26268",
        output: "14:24",
        points: 2
    }
];
