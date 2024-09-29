import { Test } from './base';

export const TestMorseCode: Test[] = [
    {
        input: "dog",
        output: "4",
        points: 2
    },
    {
        input: "e",
        output: "1",
        points: 2
    },
    {
        input: "et",
        output: "1",
        points: 2
    },
    {
        input: "ea",
        output: "2\n(4)",
        points: 2
    },
    {
        input: "eeeee",
        output: "1\n(15)",
        points: 2
    },
    {
        input: "ss",
        output: "3\n(29)",
        points: 2
    },
    {
        input: "oo",
        output: "1\n(24)",
        points: 2
    },
    {
        input: "morse",
        output: "99\n(1268)",
        points: 2
    },
    {
        input: "cyclops",
        output: "12\n(11798568)",
        points: 2
    },
    {
        input: "wireless",
        output: "8092\n(283953)",
        points: 2
    },
    {
        input: "olympiad",
        output: "1255\n(3074351)",
        points: 2
    },
    {
        input: "invisible",
        output: "27876\n(3919944)",
        points: 2
    },
    {
        input: "typewriter",
        output: "91674\n(1950220)",
        points: 3
    }
];
