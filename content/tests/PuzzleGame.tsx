import { Test } from './base';

export const TestPuzzleGame: Test[] = [
    {
        input: "RRGB\nGRBG\nRRGB\nGBRB\n2\n0",
        output: "RRRB\nGRGB\nRBGG\nGRRG\n82",
        points: 2
    },
    {
        input: "RBRB\nGRGR\nBGBG\nRBRB\n1",
        output: "0\nGAME OVER",
        points: 2
    },
    {
        input: "RGRB\nBGBR\nRBRB\nBRBR\n1\n3",
        output: "RBRB\nBRBR\nRBRB\nBRBR\n2\n2\nGAME OVER",
        points: 6
    },
    {
        input: "BBBB\nBBBB\nBBBB\nBBBB\n1\n0",
        output: "BBBB\nBBBB\nBBBB\nBBBB\n16",
        points: 2
    },
    {
        input: "RRGG\nRRGG\nBBRR\nBBRR\n1\n99\n0",
        output: "RRGG\nRRGG\nBBRR\nBBRR\n256\nRRGG\nRRGG\nBBRR\nBBRR\n25600",
        points: 4
    },
    {
        input: "RRGR\nRBBG\nRRBR\nGBBG\n1\n1\n1\n12\n0",
        output: "RRBR\nRBBG\nGRBR\nGBGG\n25\nRRBG\nRBBR\nGRBG\nRBGR\n73\nGRBG\nRBBR\nGRGG\nRBGR\n85\nGBGR\nGRBG\nRBBR\nGRBG\n482",
        points: 8
    }
];
