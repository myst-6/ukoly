import { Test } from './base';

export const TestOnTheRightTrack: Test[] = [
    {
        input: "GHIJKL\nAE\n6",
        output: "FA",
        points: 1
    },
    {
        input: "ABCDEF\nHP\n1",
        output: "PV",
        points: 2
    },
    {
        input: "ABCDEF\nPH\n1",
        output: "HB",
        points: 2
    },
    {
        input: "AEFMNO\nDK\n13",
        output: "SK",
        points: 3
    },
    {
        input: "AEFMNS\nDK\n13",
        output: "SJ",
        points: 3
    },
    {
        input: "ABCDEF\nGO\n100",
        output: "QI",
        points: 4
    },
    {
        input: "FJLMQU\nGO\n100",
        output: "RJ",
        points: 4
    },
    {
        input: "FDEGNQ\nAE\n9876",
        output: "WQ",
        points: 4
    }
];
