import { ProblemInfo } from "content";

export function getProblemFromURL(problemSet: ProblemInfo[]) : ProblemInfo | null {
  const url = new URL(window.location.toString());
  let problemNameQuery = url.searchParams.get("problem");
  for (let i: number = 0; i < problemSet.length; i++) {
    let problem = problemSet[i];
    if (problem?.display == problemNameQuery && problem !== undefined)
      return problem;
  }
  return null;
}