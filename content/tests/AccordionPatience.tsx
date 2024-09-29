import { Test } from './base';

export const TestAccordionPatience: Test[] = [
    {
        input: "1 3 5 7 2 4",
        output: "AC 3S\n6 9C\n5 KC\n4 4H",
        points: 4
    },
    {
        input: "5 3 5 8 1 8",
        output: "5C TD\n4 5H\n2 8C\n3 QC",
        points: 4
    },
    {
        input: "8 7 2 5 9 9",
        output: "8C 5D\n7 8C\n12 8C\n1 9D",
        points: 4
    },
    {
        input: "2 9 3 6 6 3",
        output: "2C TH\n22 JC\n19 JC\n17 JC",
        points: 4
    },
    {
        input: "8 9 5 9 7 7",
        output: "8C 8H\n26 8C\n27 8C\n3 9C",
        points: 4
    },
    {
        input: "1 1 1 1 1 1",
        output: "AC KD\n4 JC\n4 JC\n2 KD",
        points: 4
    }
];
