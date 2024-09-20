import { Test } from './base';

export const TestTrail: Test[] = [
    {
        "input": "8 FL 2",
        "output": "-1 1",
        "points": 2
    },
    {
        "input": "100 FLF 591",
        "output": "9 -6",
        "points": 2
    },
    {
        "input": "39 LLLRFFF 50",
        "output": "1 -1",
        "points": 2
    },
    {
        "input": "100 LLRR 5000",
        "output": "-2500 0",
        "points": 2
    },
    {
        "input": "10 LLRFLR 5000",
        "output": "-3 -3",
        "points": 2
    },
    {
        "input": "1 F 1000",
        "output": "0 1000",
        "points": 2
    },
    {
        "input": "100 L 1000",
        "output": "-4 -12",
        "points": 2
    },
    {
        "input": "39 LRFRRF 5000",
        "output": "0 -1",
        "points": 2
    },
    {
        "input": "1 L 999",
        "output": "0 -1",
        "points": 2
    },
    {
        "input": "9 LLR 5000",
        "output": "0 -2",
        "points": 2
    },
    {
        "input": "100 R 1000",
        "output": "0 -12",
        "points": 2
    },
    {
        "input": "10 FFRFRFFRRR 100",
        "output": "1 1",
        "points": 2
    }    
];

