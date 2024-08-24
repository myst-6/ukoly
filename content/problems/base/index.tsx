export type Tag = 
  "Data Structures" |
  "Binary Search" |
  "Dynamic Programming" |
  "Trees" |
  "Graphs" | 
  "Divide and Conquer" |
  "Greedy" |
  "Brute Force" |
  "Implementation" |
  "Math" |
  "Q1" |
  "Q2" |
  "Q3";

export type Difficulty = 
  "Easy" |
  "Medium" |
  "Hard" |
  "Insane";

export interface ProblemInfo {
  difficulty: Difficulty;
  display: string;
  original: string;
  year: number;
  tags: Tag[];
  component: JSX.Element;
  editorialAuthors: string[];
  solutionAuthors: string[];
}

export type DifficultyMap<T> = Record<Difficulty, T>;

export const difficultyColors: DifficultyMap<string> = {
  "Easy": "green",
  "Medium": "orange",
  "Hard": "red",
  "Insane": "purple"
};