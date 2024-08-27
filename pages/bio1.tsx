import { useState, useEffect } from "react";
import { Box, Card, Container, Divider, Flex, Header, Problem, Solution, SolutionSkeleton, Text, VStack } from "components";
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
          justifyContent="space-around"
        >
        <Box maxWidth="1600px" p={0}>
          <Text typography="display.small">About</Text>
          <Text typography="body.medium">
            These problems don't have an online grader at any point, but the test data 
            is publicly available along with the problems. At some point in the future, I 
            plan to add a grading system for BIO1 so you can check your program against the
            publicly available test data.
          </Text>
          <Divider mb={3} mt={3} />
          <Container maxWidth="full" overflow="hidden" p={0}>
            <Flex height="100%" flexWrap="wrap">
              <Card variant="outline" m={0} marginRight={1}>
                <VStack flex="0" maxWidth="full" p={0} m={0} spacing={1} maxHeight="65vh">
                  <Text p={1} typography="display.small">Problems</Text>
                  <VStack overflowY="auto">
                    {
                      ...bio1Problems.map((problem) => {
                        return (
                          <Box display="flex" p={1} key={problem.display}>
                            <Problem problem={problem} onChoose={() => _setProblem(problem)} />
                          </Box>
                        );
                      })
                    }
                  </VStack>
                </VStack>
              </Card>
              <Card variant="outline" flex="1" m={0} marginLeft={1}>
                <VStack maxWidth="full" p={0} m={0} spacing={1} maxHeight="65vh" alignItems="left">
                  <Text p={1}align="left" typography="display.small">Problem Viewer{problem && `: ${problem.display}`}</Text>
                  <VStack overflowY="auto" direction="column" alignItems="start">
                    <Box paddingRight={4} maxWidth="full">
                      {
                        problem === null ? <SolutionSkeleton /> : <Solution problem={problem}/>
                      }
                    </Box>
                  </VStack>
                </VStack>
              </Card>
            </Flex>
          </Container>
        </Box>
      </Flex>
    </>
  );
}
