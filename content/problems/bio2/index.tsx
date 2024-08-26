import { ProblemInfo } from "../base";
import { BrokersDoom, Carve, Dino, Milk, Proto, Whisperer, TerminalVelocity, ScoopOne, ScoopTwo, KeepOnTheGrass, Byway, Cables } from "solutions";

export const bio2Problems: ProblemInfo[] = [
  {
    difficulty: "Medium",
    display: "Prototype",
    original: "https://www.olympiad.org.uk/papers/2021/final/proto.pdf",
    year: 2021,
    tags: ["Data Structures"],
    editorialAuthors: ["Boris Hall"],
    solutionAuthors: ["Boris Hall", "Samuel Trajtenberg"],
    component: <Proto />,
  },
  {
    difficulty: "Medium",
    display: "Dinocracy",
    original: "https://www.olympiad.org.uk/papers/2021/final/dine.pdf",
    year: 2021,
    tags: ["Graphs", "Greedy"],
    editorialAuthors: ["Boris Hall"],
    solutionAuthors: ["Boris Hall"],
    component: <Dino />,
  },
  {
    difficulty: "Hard",
    display: "What a Carve Up",
    original: "https://www.olympiad.org.uk/papers/2021/final/carve.pdf",
    year: 2021,
    tags: ["Greedy"],
    editorialAuthors: ["Boris Hall"],
    solutionAuthors: ["Boris Hall"],
    component: <Carve />,
  },
  {
    difficulty: "Insane",
    display: "Pigeon Whisperer",
    original: "https://www.olympiad.org.uk/papers/2021/final/whisperer.pdf",
    year: 2021,
    tags: ["Dynamic Programming", "Graphs", "Brute Force"],
    editorialAuthors: ["Boris Hall"],
    solutionAuthors: ["Boris Hall"],
    component: <Whisperer />
  },
  {
    difficulty: "Easy",
    display: "Brokers Doom",
    original: "https://www.olympiad.org.uk/papers/2017/final/BrokersDoom.pdf",
    year: 2017,
    tags: ["Greedy", "Two Pointers"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <BrokersDoom />
  },
  {
    difficulty: "Medium",
    display: "A Splash of Milk",
    original: "https://www.olympiad.org.uk/papers/2023/final/milk.pdf",
    year: 2023,
    tags: ["Graphs", "DFS and Similar"],
    editorialAuthors: ["Boris Hall"],
    solutionAuthors: ["Boris Hall"],
    component: <Milk />
  },
  {
    difficulty: "Easy",
    display: "Terminal Velocity",
    original: "https://olympiad.org.uk/papers/2019/final/velocity.pdf",
    year: 2019,
    tags: ["Greedy"],
    editorialAuthors: ["Anango Prabhat"],
    solutionAuthors: ["Anango Prabhat"],
    component: <TerminalVelocity />
  },
  {
    difficulty: "Medium",
    display: "Scoop! (part 1)",
    original: "https://www.olympiad.org.uk/papers/2016/final/Scoop1.pdf",
    year: 2016,
    tags: ["Trees", "DFS and Similar"],
    editorialAuthors: ["Yuvan Raja"],
    solutionAuthors: ["Yuvan Raja"],
    component: <ScoopOne />
  },
  {
    difficulty: "Medium",
    display: "Scoop! (part 2)",
    original: "https://www.olympiad.org.uk/papers/2016/final/Scoop2.pdf",
    year: 2016,
    tags: ["Trees", "DFS and Similar"],
    editorialAuthors: ["Yuvan Raja"],
    solutionAuthors: ["Yuvan Raja"],
    component: <ScoopTwo />
  },
  {
    difficulty: "Easy",
    display: "Keep On The Grass",
    original: "https://olympiad.org.uk/papers/2017/final/KeepOnTheGrass.pdf",
    year: 2017,
    tags: ["Math", "Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <KeepOnTheGrass />
  },
  {
    difficulty: "Medium",
    display: "Cables",
    original: "https://www.olympiad.org.uk/papers/2018/final/Cables.pdf",
    year: 2018,
    tags: ["Greedy", "Geometry"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <Cables />
  },
  {
    difficulty: "Easy",
    display: "Byway",
    original: "https://www.olympiad.org.uk/papers/2018/final/Byway.pdf",
    year: 2018,
    tags: ["Graphs", "DFS and Similar"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <Byway />
  }
];
