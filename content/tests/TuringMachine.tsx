import { Test } from './base';

export const TestTuringMachine: Test[] = [
    {
        input: "2\n1R2 0R2\n1L1 1L0\n10",
        output: "0000100\n4",
        points: 2
    },
    {
        input: "1\n1R0 0L1\n1",
        output: "0010000\n1",
        points: 3
    },
    {
        input: "2\n1R2 0L2\n1R1 0L1\n12345",
        output: "1110000\n12345",
        points: 3
    },
    {
        input: "3\n0R3 1L1\n0L1 1R2\n0R2 1L3\n99",
        output: "0000000\n99",
        points: 3
    },
    {
        input: "2\n1L2 1R1\n1R2 0R1\n1000000",
        output: "1110100\n1000000",
        points: 3
    },
    {
        input: "3\n1R2 0L3\n1L3 0R1\n1L1 1L2\n21",
        output: "0101101\n21",
        points: 3
    },
    {
        input: "2\n1R2 1L2\n1L1 1R0\n50",
        output: "0111100\n6",
        points: 4
    },
    {
        input: "3\n1R2 1R0\n1L2 0R3\n1L3 1L1\n100",
        output: "0111110\n21",
        points: 4
    }
];
