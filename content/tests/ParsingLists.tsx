import { Test } from './base';

export const TestParsingLists: Test[] = [
    {
        input: "E(OE) 3",
        output: "350",
        points: 1
    },
    {
        input: "T 1",
        output: "1",
        points: 2
    },
    {
        input: "O 123456",
        output: "246911",
        points: 2
    },
    {
        input: "EE 1",
        output: "8",
        points: 2
    },
    {
        input: "TOE 1000",
        output: "354",
        points: 2
    },
    {
        input: "(TO)E 555",
        output: "266",
        points: 2
    },
    {
        input: "T(OE) 2000",
        output: "1430",
        points: 2
    },
    {
        input: "(EO)(OE) 5000",
        output: "2559830",
        points: 2
    },
    {
        input: "E(OO)E 4433",
        output: "2269458",
        points: 2
    },
    {
        input: "E(O(OE)) 5566",
        output: "182375894",
        points: 2
    },
    {
        input: "T(OO(EO))T 987654",
        output: "1108",
        points: 2
    },
    {
        input: "EEEOEEEOEEEO 12345",
        output: "103552892655",
        points: 2
    },
    {
        input: "EE(O(EEEE))O 12345678",
        output: "424194248808595199",
        points: 2
    }
];
