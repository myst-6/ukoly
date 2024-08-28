import { ProblemInfo } from "content";
import { Box } from "../Box";
import { Card } from "../Card";
import { Divider } from "../Divider";
import { Flex } from "../Flex";
import { Problem } from "../Problem";
import { Spacer } from "../Spacer";
import { VStack } from "../Stack";
import { Solution } from "../Solution";
import { SolutionSkeleton } from "../SolutionSkeleton";
import { Text } from "../Text";
import { useProblemset } from "./hook";
import { MouseEvent, useRef, useState } from "react";

export interface ProblemsetProps {
  problems: ProblemInfo[];
}

export const Problemset = ({ problems }: ProblemsetProps) => {
  const { problem, setProblem } = useProblemset(problems);
  const [width, setWidth] = useState<number>(500);
  const [drag, setDrag] = useState<boolean>(false);
  const grabRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (ev: MouseEvent) => {
    if (!drag) return;
    if (grabRef.current === null) return;

    // get x-coordinate of left side of box
    const { left } = ev.currentTarget.getBoundingClientRect();
    
    // get left padding of bar being dragged
    const { paddingLeft, paddingRight } = getComputedStyle(grabRef.current);
    const pl = parseFloat(paddingLeft);
    const pr = parseFloat(paddingRight);

    // go halfway into the bar
    const x = ev.clientX - left - pl - pr;

    setWidth(x);
  };

  return (
    <Flex 
      height="100%"
      onMouseMove={ev => onMouseMove(ev)}
      onMouseUp={() => setDrag(false)}
      userSelect={drag ? "none" : "auto"}
    >
      <Card 
        variant="outline" 
        m={0}
        width={width && `${width}px`} 
        minW={"fit-content"}
      >
        <VStack 
          flex="0" 
          minW="fit-content"
          p={0} 
          m={0} 
          spacing={1} 
          maxH="65vh"
        >
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
      <Spacer 
        p={1}
        flex={0} 
        ref={grabRef}
        cursor="col-resize" 
        onMouseDown={() => setDrag(true)}
      >
        <Divider orientation="vertical" />
      </Spacer>
      <Card 
        variant="outline" 
        flex="1"
        minW="md"
      >
        <VStack maxWidth="full" spacing={1} maxH="65vh" alignItems="left">
          <Text p={1}align="left" typography="display.small">Problem Viewer{problem && `: ${problem.display}`}</Text>
          <VStack overflowY="auto" alignItems="start">
            <Box pr={4} maxW="full">
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