import { Test } from './base';

export const TestMuTorere: Test[] = [
    {
        input: "XXEXOOOXO\nn",
        output: "XXEXOOOXO\nPlayer 2 wins",
        points: 2
    },
    {
        input: "EOOOOXXXX\nn\nr",
        output: "OEOOOXXXX\nOXOEOXXXO\nPlayer 1 wins",
        points: 3
    },
    {
        input: "OEXXOOOXX\nn\nn\nn\nn",
        output: "EOXXOOOXX\nXOEXOOOXX\nXEOXOOOXX\nXXOXOOOXE\nPlayer 2 wins",
        points: 5
    },
    {
        input: "EXXXXOOOO\nn\nn\nr",
        output: "OXXXXEOOO\nOXXXEXOOO\nDraw",
        points: 4
    },
    {
        input: "XEOXXXOOO\nn\nr",
        output: "XOOXXXOOE\nOXOXXXOEO\nPlayer 1 wins",
        points: 4
    },
    {
        input: "OOEXOOXXX\nr",
        output: "XOXOOOXEX\nPlayer 2 wins",
        points: 3
    },
    {
        input: "EXOXOXXOO\nr",
        output: "Draw",
        points: 3
    }
];
