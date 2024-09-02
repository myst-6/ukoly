import { Box } from "../Box";
import { Badge } from "../Badge";
import { Card, type CardProps } from "../Card";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { Flex } from "../Flex";
import { HStack, VStack } from "../Stack";
import { Text } from "../Text";
import { Wrap } from "../Wrap";
import { difficultyColors, ProblemInfo } from "content";
import { Show } from "../Problemset/ShowMenu"
import assert from "assert";

export interface ProblemProps extends CardProps {
  problem: ProblemInfo;
  onChoose: () => void;
  show: Show;
}

const MAXLEN = 28;

export const Problem = ({ problem, onChoose, show, ...props }: ProblemProps) => {
  assert(problem.display.length <= MAXLEN, `\
Problem display can't be too long (>${MAXLEN}ch). \
'${problem.display}' has ${problem.display.length} characters.`);

  return (
    <Card width="sm" height="3xs" {...props}>
      <VStack height="100%" justifyContent="space-between">
        <Box>
          <HStack width="100%" mb={2}>
            <Text typography="title.large">{problem.display}</Text>
            <Flex flex={1} justifyContent="flex-end">
              <Button 
                size="sm" 
                colorScheme={difficultyColors[problem.difficulty]} 
                onClick={() => onChoose()}
              >
                View
              </Button>
            </Flex>
          </HStack>
          <Divider m={2} />
          <Text typography="body.medium">
            Editorial authored by {problem.editorialAuthors.join(", ")}.
            Code provided by {problem.solutionAuthors.join(", ")}.
          </Text>
        </Box>
        <Wrap width="100%" justify="center">
          {
           show.showDiff && <Badge colorScheme={difficultyColors[problem.difficulty]}>{problem.difficulty}</Badge>
          }
          <Badge>{problem.year}</Badge>
          {
            problem.question && <Badge>{"Q" + problem.question.toString()}</Badge>
          }
          {
            ...problem.tags.map(tag => {
              return (
                show.showTags && <Badge key={tag}>{tag}</Badge>
              );
            })
          }
        </Wrap>
      </VStack>
    </Card>
  );
};
