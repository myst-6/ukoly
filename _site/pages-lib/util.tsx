import { ProblemInfo } from "content";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function getProblemFromURL(
  problemSet: ProblemInfo[]
): ProblemInfo | null {
  const url = new URL(window.location.toString());
  let problemNameQuery = url.searchParams.get("problem");
  for (let i: number = 0; i < problemSet.length; i++) {
    let problem = problemSet[i];
    if (problem?.display == problemNameQuery && problem !== undefined)
      return problem;
  }
  return null;
}

export type ProblemSetter = Dispatch<SetStateAction<ProblemInfo | null>>;

export function loadProblemFromURL(
  problemSet: ProblemInfo[],
  setProblem: ProblemSetter
): void {
  let problemInURL = getProblemFromURL(problemSet);
  if (problemInURL)
    // If the problem parameter is already in the URL, there's no need to push it again to session history
    setProblemWrapper(problemInURL, setProblem, false);
}

export function setProblemWrapper(
  newProblem: ProblemInfo | null,
  setProblem: ProblemSetter,
  pushToHistory: boolean = true
) {
  if (pushToHistory) {
    /*
     * Pushes problem URL to the session history
     * Allows user to navigate between problems they've viewed
     */
    const url = new URL(location.toString());
    if (newProblem) url.searchParams.set("problem", newProblem.display);
    else url.searchParams.delete("problem");
    history.pushState({}, "", url);
  }
  // Calls setter from the page's problem hook
  setProblem(newProblem);
}

export function useProblemset(problemset: ProblemInfo[]) {
  const [problem, setProblem] = useState<ProblemInfo | null>(null);

  useEffect(() => {
    loadProblemFromURL(problemset, setProblem);
    onpopstate = () => {
      /*
       * Callback when the user navigates session history.
       */
      let problemInURL = getProblemFromURL(problemset);
      if (problemInURL) setProblemWrapper(problemInURL, setProblem, false);
      else setProblemWrapper(null, setProblem, false);
    };
  }, [problemset]);

  return {
    problem,
    setProblem: (problem: ProblemInfo) =>
      setProblemWrapper(problem, setProblem),
  };
}
