import { ProblemInfo } from "../base";
import { BrokersDoom, Carve, Dino, Milk, Proto, Whisperer } from "solutions";

export const bio2Problems = {
  proto: {
    difficulty: "Medium",
    display: "Prototype",
    original: "https://www.olympiad.org.uk/papers/2021/final/proto.pdf",
    year: 2021,
    tags: ["Data Structures"],
    editorialAuthors: ["Boris Hall"],
    solutionAuthors: ["Boris Hall", "Samuel Trajtenberg"],
    component: <Proto />,
  } as ProblemInfo,
  dine: {
    difficulty: "Medium",
    display: "Dinocracy",
    original: "https://www.olympiad.org.uk/papers/2021/final/dine.pdf",
    year: 2021,
    tags: ["Graphs", "Greedy"],
    editorialAuthors: ["Boris Hall"],
    solutionAuthors: ["Boris Hall"],
    component: <Dino />,
  } as ProblemInfo,
  carve: {
    difficulty: "Hard",
    display: "What a Carve Up",
    original: "https://www.olympiad.org.uk/papers/2021/final/carve.pdf",
    year: 2021,
    tags: ["Greedy"],
    editorialAuthors: ["Boris Hall"],
    solutionAuthors: ["Boris Hall"],
    component: <Carve />,
  } as ProblemInfo,
  whisperer: {
    difficulty: "Insane",
    display: "Pigeon Whisperer",
    original: "https://www.olympiad.org.uk/papers/2021/final/whisperer.pdf",
    year: 2021,
    tags: ["Dynamic Programming", "Graphs", "Brute Force"],
    editorialAuthors: ["Boris Hall"],
    solutionAuthors: ["Boris Hall"],
    component: <Whisperer />
  } as ProblemInfo,
  brokersdoom: {
    difficulty: "Easy",
    display: "Brokers Doom",
    original: "https://www.olympiad.org.uk/papers/2017/final/BrokersDoom.pdf",
    year: 2017,
    tags: ["Greedy", "Two Pointers"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <BrokersDoom />
  } as ProblemInfo,
  milk: {
    difficulty: "Medium",
    display: "A Splash of Milk",
    original: "https://www.olympiad.org.uk/papers/2023/final/milk.pdf",
    year: 2023,
    tags: ["Graphs", "DFS and Similar"],
    editorialAuthors: ["Boris Hall"],
    solutionAuthors: ["Boris Hall"],
    component: <Milk />
  } as ProblemInfo,
  terminalvelocity: {
    difficulty: "Easy",
    display: "Terminal Velocity",
    original: "https://olympiad.org.uk/papers/2019/final/velocity.pdf",
    year: 2019,
    tags: [],
    editorialAuthors: ["Anango Prabhat"],
    solutionAuthors: ["Anango Prabhat"],
    component: <TerminalVelocity />
  } as ProblemInfo
};
