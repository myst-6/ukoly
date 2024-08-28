import { ProblemInfo } from "content";
import { Box } from "../Box";
import { Card } from "../Card";
import { Flex } from "../Flex";
import { Problem } from "../Problem";
import { VStack } from "../Stack";
import { Solution } from "../Solution";
import { SolutionSkeleton } from "../SolutionSkeleton";
import { Text } from "../Text";
import { useProblemset } from "./hook";

export interface ProblemsetProps {
  problems: ProblemInfo[];
}

export const Problemset = ({ problems }: ProblemsetProps) => {
  const { problem, setProblem } = useProblemset(problems);

  return (
    <Flex height="100%" flexWrap="wrap">
      <Card variant="outline" m={0} marginRight={1}>
        <VStack flex="0" maxWidth="full" p={0} m={0} spacing={1} maxHeight="65vh">
          <Text p={1} typography="display.small">Problems</Text>
          <VStack overflowY="auto">
            {
              ...problems.map((problem) => {
                return (
                  <Box display="flex" p={1} key={problem.display}>
                    <Problem problem={problem} onChoose={() => setProblem(problem)} />
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
  );
};