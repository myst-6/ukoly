import { Test } from './base';

export const TestDownPat: Test[] = [
    {
        input: "DE C",
        output: "NO YES YES",
        points: 1
    },
    {
        input: "A A",
        output: "YES YES NO",
        points: 2
    },
    {
        input: "A B",
        output: "YES YES NO",
        points: 2
    },
    {
        input: "B A",
        output: "YES YES YES",
        points: 2
    },
    {
        input: "AB CD",
        output: "NO NO NO",
        points: 2
    },
    {
        input: "BEFCD A",
        output: "NO YES YES",
        points: 2
    },
    {
        input: "GEA DBCF",
        output: "NO NO YES",
        points: 2
    },
    {
        input: "EFCD GAB",
        output: "YES YES YES",
        points: 2
    },
    {
        input: "ECBDFA LKJIHG",
        output: "YES NO NO",
        points: 2
    },
    {
        input: "BDIGEF HCA",
        output: "NO NO YES",
        points: 2
    },
    {
        input: "JKHGIL ADFEBC",
        output: "NO NO YES",
        points: 2
    }
];
