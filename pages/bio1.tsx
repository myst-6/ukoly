import { useState, useEffect } from "react";
import { Box, Divider, Flex, Header, Problem, Solution, SolutionSkeleton, Spacer, Text } from "components";
import { bio1Problems, pages, ProblemInfo } from "content";
import { getProblemFromURL } from "./util";

export default function BIO1() {
  const [problem, setProblem] = useState<ProblemInfo | null>(null);

  function _setProblem(newProblem: ProblemInfo | null, pushToHistory: boolean = true) {
    if (pushToHistory) {
      /*
       * Pushes problem URL to the session history
       * Allows user to navigate between problems they've viewed
      */
      const url = new URL(location.toString());
      if (newProblem !== null)
        url.searchParams.set("problem", newProblem.display);
      else
        url.searchParams.delete("problem");      
      history.pushState({}, "", url)
    }
    setProblem(newProblem);
  }

  useEffect(() => {
    let problemInURL = getProblemFromURL(bio1Problems);
    console.log(problemInURL?.display);
    if (problemInURL)
      // If the problem parameter is already in the URL, there's no need to push it again to session history
      _setProblem(problemInURL, false);
    onpopstate = () => {
      /*
       * Callback when the user navigates session history.
      */
      let problemInURL = getProblemFromURL(bio1Problems);
      if (problemInURL)
        _setProblem(problemInURL, false);
      else
        _setProblem(null, false);
    }
  }, []);

  return (
    <>
      <Header page={pages.bio1} />
      <Flex
          as="main"
          overflow="auto"
          maxWidth="100%"
          px={5}
          py={2}
          justifyContent="center"
        >
        <Box width="4xl">
          <Text typography="display.small">About</Text>
          <Text typography="body.medium">
            These problems don't have an online grader at any point, but the test data 
            is publicly available along with the problems. At some point in the future, I 
            plan to add a grading system for BIO1 so you can check your program against the
            publicly available test data.
          </Text>
          <Divider mb={3} mt={3} />
          <Text typography="display.small">Problems</Text>
          <Spacer m={2} />
          <Box display="flex" alignItems="center" justifyContent="center" flexWrap="wrap" gap="1em">
            {
              ...bio1Problems.map((problem) => {
                return (
                  <Box display="flex" key={problem.display}>
                    <Problem problem={problem} onChoose={() => _setProblem(problem)} />
                  </Box>
                );
              })
            }
          </Box>
          <Divider mb={3} mt={6} />
          <Text typography="display.small">Problem Viewer{problem && `: ${problem.display}`}</Text>
          {
            problem === null ? <SolutionSkeleton /> : <Solution problem={problem} />
          }
          <Spacer mt={6} p={6} />
        </Box>
      </Flex>
    </>
  );
}
