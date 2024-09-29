import { Test } from './base';

export const TestFourInALine: Test[] = [
    {
        input: "6\n1 7 2 6 3 5\nn",
        output: "-------\n-------\n-------\n-------\n-------\n***-ooo\n-------\n-------\n-------\n-------\n-------\n****ooo\nPlayer 1 wins",
        points: 5
    },
    {
        input: "8\n3 3 3 4 4 4 4 2\nn\nn\nr",
        output: "-------\n-------\n---*---\n--*o---\n--o*---\n-o*o---\n-------\n-------\n---*---\n--*o---\n--o*---\n*o*o---\n-------\n-------\n---*---\n--*o---\n-oo*---\n*o*o---\n*------\no------\n**o*---\noo*o---\n*oo*---\n*o*o*--\nPlayer 1 wins",
        points: 9
    },
    {
        input: "5\n3 4 3 4 3\nn\nr",
        output: "-------\n-------\n-------\n--*----\n--*o---\n--*o---\n-------\n-------\n--o----\n--*----\n--*o---\n--*o---\noo*o*o-\n***oo*-\nooo**o-\n***oo*-\noo*oooo\n***o***\nPlayer 2 wins",
        points: 7
    },
    {
        input: "1\n7\nr",
        output: "-------\n-------\n-------\n-------\n-------\n------*\n**oo*oo\noo**o**\n**oo*oo\noo**o**\n**o***o\nooo*oo*\nDraw",
        points: 5
    }
]