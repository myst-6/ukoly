import { Test } from './base';

export const TestISBN: Test[] = [
    {
        input: "15688?111X",
        output: "1",
        points: 2
    },
    {
        input: "812071988?",
        output: "3",
        points: 2
    },
    {
        input: "020161586?",
        output: "X",
        points: 2
    },
    {
        input: "?131103628",
        output: "0",
        points: 2
    },
    {
        input: "?86046324X",
        output: "1",
        points: 2
    },
    {
        input: "1?68811306",
        output: "5",
        points: 2
    },
    {
        input: "951?451570",
        output: "4",
        points: 2
    },
    {
        input: "0393020?31",
        output: "2",
        points: 2
    },
    {
        input: "01367440?5",
        output: "9",
        points: 2
    },
    {
        input: "0?51359657",
        output: "9",
        points: 2
    },
    {
        input: "994769?324",
        output: "6",
        points: 2
    },
    {
        input: "1507987?13",
        output: "0",
        points: 2
    }
];