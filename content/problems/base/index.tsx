// order doesn't matter; it will be alphabetical
export const tags = [
  "Data Structures",
  "Binary Search",
  "Dynamic Programming",
  "Trees",
  "Graphs", 
  "Divide and Conquer",
  "Greedy",
  "Brute Force",
  "Implementation", 
  "DFS and Similar",
  "Two Pointers",
  "Math",
  "Geometry",
] as const;

export type Tag = typeof tags[number];

// ordered from easiest to hardest
export const difficulties = [
  "Easy",
  "Medium",
  "Hard",
  "Insane"
] as const;

export type Difficulty = typeof difficulties[number];

export interface ProblemInfo {
  difficulty: Difficulty;
  display: string;
  original: string;
  year: number;
  question?: number;
  tags: Tag[];
  component: JSX.Element;
  editorialAuthors: string[];
  solutionAuthors: string[];
}

export interface BIO1ProblemInfo extends ProblemInfo{
  question: 1 | 2 | 3;
}
export type DifficultyMap<T> = Record<Difficulty, T>;

export const difficultyColors: DifficultyMap<string> = {
  "Easy": "green",
  "Medium": "orange",
  "Hard": "red",
  "Insane": "purple"
};
