import { Test } from './base';

export const TestWaves: Test[] = [
    {
        input: "2\n-3 0 1\n0 0 2\n4 100\n4",
        output: "--------X\n-*------X\n*-*-*---X\n-o-*-*--X\no-----*-X\n-o-*-*--X\n*-*-*---X\n-*------X\n--------X",
        points: 3
    },
    {
        input: "1\n1 1 1\n100 200\n4",
        output: "-----*---\n----*-*--\n---*-o-*-\n--*-o-o-*\n---*-o-*-\n----*-*--\n-----*---\n---------\n---------",
        points: 3
    },
    {
        input: "2\n-1 1 2\n1 -1 3\n100 200\n5",
        output: "---*-----\n--*-*----\n-*-o-*---\n*-o-o**--\n-*-o***--\n--***o-*-\n---**-*--\n-----*---\n---------",
        points: 3
    },
    {
        input: "3\n10 10 1\n-10 10 1\n0 1 21\n100 200\n21",
        output: "*-o---o-*\n-*-o-o-*-\n--*-o-*--\n----*----\n--o-*-o--\n-o-*-*-o-\no-*---*-o\n-*-----*-\n*-------*",
        points: 3
    },
    {
        input: "2\n112525 112525 225048\n0 450000 100\n-500000 500000\n450100",
        output: "--o---o-*\n---o-o-*-\n*---o-*--\n-*---*---\n--*------\n---*-o---\n----*-o--\n-----*-o-\n------*-o",
        points: 3
    },
    {
        input: "1\n-5 0 1\n3 100\n12",
        output: "----o-*X-\n-----o*X-\n-----*oX-\n----*-oX-\n---*-o-X-\n----*-oX-\n-----*oX-\n-----o*X-\n----o-*X-",
        points: 3
    },
    {
        input: "1\n0 0 1\n-4 4\n13",
        output: "X-------X\nX-*-o-*-X\nX*-o-o-*X\nX*o---o*X\nXo*---*oX\nX*o---o*X\nX*-o-o-*X\nX-*-o-*-X\nX-------X",
        points: 3
    },
    {
        input: "2\n-1 1 1\n1 -1 1\n-5 5\n500000",
        output: "o-*-*-o--\n-o-*-o-*-\n--*-o-o-*\n-*-o-*-o*\n*---o---*\n*o-*-o-*-\n*-o-o-*--\n-*-o-*-o-\n--o-*-*-o",
        points: 3
    },
    {
        input: "3\n0 0 1\n-2 0 1\n2 0 1\n-1 1\n4",
        output: "---X-X---\n--*X*X*--\n-**X*X**-\n**oX*Xo**\n*ooX-Xoo*\n**oX*Xo**\n-**X*X**-\n--*X*X*--\n---X-X---",
        points: 3
    },
];