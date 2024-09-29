import { Test } from './base';

export const TestRules: Test[] = [
    {
        input: "x\n7\n12",
        output: "Yes\nNo",
        points: 2
    },
    {
        input: "xux\n667\n65",
        output: "No\nNo",
        points: 2
    },
    {
        input: "xddu\n8654\n2102",
        output: "No\nYes",
        points: 2
    },
    {
        input: "xuxd\n9801\n4543",
        output: "No\nYes",
        points: 2
    },
    {
        input: "xx*\n0\n2006",
        output: "Yes\nYes",
        points: 2
    },
    {
        input: "xd*u?\n56\n54322",
        output: "Yes\nNo",
        points: 2
    },
    {
        input: "x?x\n1\n11",
        output: "Yes\nYes",
        points: 2
    },
    {
        input: "x?x\n123\n4567",
        output: "No\nNo",
        points: 2
    },
    {
        input: "x*xu\n7654\n2",
        output: "No\nNo",
        points: 2
    },
    {
        input: "x(xud)?\n789\n7890",
        output: "No\nYes",
        points: 2
    },
    {
        input: "x(xd)?(xu)?\n421\n422",
        output: "Yes\nNo",
        points: 2
    },
    {
        input: "x(ud)*u?\n0836\n19181716151",
        output: "Yes\nYes",
        points: 2
    }
];
