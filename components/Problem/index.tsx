import { Badge } from "../Badge";
import { Button } from "../Button";
import { Card, type CardProps } from "../Card";
import { Flex } from "../Flex";
import { HStack } from "../Stack";
import { Spacer } from "../Spacer";
import { Text } from "../Text";
import { Wrap } from "../Wrap";
import { difficultyColors, ProblemInfo } from "content";

export interface ProblemProps extends CardProps {
  problem: ProblemInfo;
  onChoose: () => void;
}

export const Problem = ({ problem, onChoose, ...props }: ProblemProps) => {
  return (
    <Card width="sm" {...props}>
      <HStack mb={2}>
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
      Editorial authored by {problem.editorialAuthors.join(", ")}.
      Code provided by {problem.solutionAuthors.join(", ")}.
      <Spacer margin={2} />
      <Wrap>
        <Badge colorScheme={difficultyColors[problem.difficulty]}>{problem.difficulty}</Badge>
        <Badge>{problem.year}</Badge>
        {
          ...problem.tags.map(tag => {
            return (
              <Badge key={tag}>{tag}</Badge>
            );
          })
        }
      </Wrap>
    </Card>
  );
};