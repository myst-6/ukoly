import { ProblemInfo } from "../base";
import { IntegerStrings, ParsingLists, DecoderRing } from "solutions";

export const bio1Problems = {
  proto: {
    difficulty: "Medium",
    display: "Integer Strings",
    original: "https://www.olympiad.org.uk/papers/2024/bio/bio24-exam.pdf",
    year: 2024,
    tags: ["Dynamic Programming"],
    editorialAuthors: ["TODO"],
    solutionAuthors: ["TODO"],
    component: <IntegerStrings />,
  } as ProblemInfo,
  dine: {
    difficulty: "Medium",
    display: "Parsing Lists",
    original: "https://www.olympiad.org.uk/papers/2024/bio/bio24-exam.pdf",
    year: 2024,
    tags: ["Implementation"],
    editorialAuthors: ["TODO"],
    solutionAuthors: ["TODO"],
    component: <ParsingLists />,
  } as ProblemInfo,
  decoder: {
    difficulty: "Easy",
    display: "Decoder Ring",
    original: "https://www.olympiad.org.uk/papers/2018/bio/bio18-exam.pdf",
    year: 2018,
    tags: ["Implementation"],
    editorialAuthors: ["TODO"],
    solutionAuthors: ["TODO"],
    component: <DecoderRing />,
  } as ProblemInfo
};