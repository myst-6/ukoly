import { Test } from './base';

export const TestBattleships: Test[] = [
    {
        input: "10 5 9999",
        output: "5 0 V\n5 5 V\n0 6 H\n0 1 V\n7 2 V\n7 7 V\n2 8 H\n2 3 V\n9 4 V\n9 9 H",
        points: 2
    },
    {
        input: "1 1 1000",
        output: "1 0 H\n7 0 H\n1 2 H\n5 2 H\n1 4 H\n5 4 H\n9 4 H\n1 6 H\n3 6 H\n5 6 H",
        points: 5
    },
    {
        input: "2 2 12345",
        output: "2 0 H\n2 6 H\n2 2 H\n4 9 H\n7 3 H\n7 9 H\n9 5 H\n2 4 H\n7 5 V\n2 9 H",
        points: 5
    },
    {
        input: "5 7 12346",
        output: "1 1 H\n1 7 H\n1 5 H\n7 8 H\n3 3 H\n7 3 H\n5 6 H\n9 0 H\n1 9 H\n7 0 H",
        points: 5
    },
    {
        input: "1 29209 32719",
        output: "9 0 V\n9 6 V\n7 6 V\n7 2 V\n5 0 V\n5 8 V\n5 6 V\n5 4 V\n3 6 V\n3 4 V",
        points: 5
    },
    {
        input: "16807 1 9999",
        output: "1 0 V\n9 0 V\n3 6 V\n3 3 H\n8 7 H\n8 5 H\n6 6 H\n7 9 H\n5 8 V\n1 8 V",
        points: 5
    }
]
