import { Test } from './base';

export const TestNeutron: Test[] = [
    {
        input: "1 2 3 4 5\n1 2 3 4 5",
        output: "SSSSS\nF.*..\n.....\n.....\n.FFFF\n.SSSS\nF...*\n.....\n...S.\n.FFFF\n..SSS\nFF...\n.....\n...SS\n.*FFF",
        points: 3
    },
    {
        input: "5 2 4 1 3\n1 4 2 3 5",
        output: "SSSSS\n..*.F\n.....\n.....\nFFFF.\n.SSSS\n...*F\n.....\n.....\nFFFFS\n.FF.F\n...SS\n....S\n...F.\nSS*.F",
        points: 5
    },
    {
        input: "1 4 3 5 2\n2 3 4 1 5",
        output: "SSSSS\nF.*..\n.....\n.....\n.FFFF\nS.SSS\nF...*\n.....\n....S\n.FFFF\nFFSSF\n.....\n....S\nS..F.\n*.F.S",
        points: 6
    },
    {
        input: "1 3 5 4 2\n4 1 2 5 3",
        output: "SSSSS\nF.*..\n.....\n.....\n.FFFF\nSSS.S\nF...*\n.....\n...S.\n.FFFF\n..S..\nF.FSF\n..SF*\n.S.SF\n.....",
        points: 6
    },
    {
        input: "3 4 1 5 2\n3 4 1 5 2",
        output: "SSSSS\n..*..\n..F..\n.....\nFF.FF\nSS.SS\n....*\n..F.S\n.....\nFF.FF\n..S.*\n.S.F.\n..FSS\nSF..F\n....F",
        points: 6
    }
];
