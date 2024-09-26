import { Test } from './base';

export const TestDieTipping: Test[] = [
    {
        input: "1 3 5\n1 6 5\n1 1 5\n1\n1\n3\n0",
        output: "111\n135\n115\n111\n251\n151\n221\n161\n131",
        points: 3
    },
    {
        input: "1 1 1\n4 4 4\n1 1 1\n65\n0",
        output: "111\n141\n111",
        points: 2
    },
    {
        input: "2 1 2\n1 2 1\n2 1 2\n1\n1\n1\n2\n0",
        output: "131\n212\n111\n212\n131\n232\n141\n232\n111\n121\n411\n551",
        points: 5
    },
    {
        input: "6 6 6\n6 6 6\n6 6 6\n1\n2\n32\n27\n0",
        output: "111\n666\n616\n111\n456\n616\n111\n111\n111\n161\n111\nxxx",
        points: 7
    },
    {
        input: "4 5 4\n4 5 4\n4 5 4\n19\n81\n64\n0",
        output: "111\n564\n111\n111\n355\n125\nxxx\n51x\n32x",
        points: 7
    }
];
