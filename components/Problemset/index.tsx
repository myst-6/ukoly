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
  const [width, setWidth] = useState<number>(0);
  const [drag, setDrag] = useState<boolean>(false);

  const [collapse, setCollapse] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(0);
  
  const grabRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (ev: MouseEvent) => {
    if (!drag) return;
    if (grabRef.current === null) return;
    if (cardRef.current === null) return;

    // get x-coordinate of left side of box
    const { left } = ev.currentTarget.getBoundingClientRect();
    
    // get left padding of bar being dragged
    const { paddingLeft } = getComputedStyle(grabRef.current);
    const pl = parseFloat(paddingLeft);

    // go halfway into the bar
    const x = ev.clientX - left - pl;

    // check if in collapsing territory
    const { width } = getComputedStyle(cardRef.current);
    const w = parseFloat(width);
    if (!collapse && x <= w / 4) {
      setCollapse(true);
      setLimit(Math.max(x + 2, w / 4) + 2); // +2 to prevent flicker
    } else {
      if (collapse && x >= limit) setCollapse(false);
      setWidth(x);
    }
  };

  return (
    <Flex 
      height="100%"
      onMouseMove={ev => onMouseMove(ev)}
      onMouseUp={() => setDrag(false)}
      userSelect={drag ? "none" : "auto"}
      cursor={drag ? "col-resize" : "auto"}
    >
      <Card 
        variant={collapse ? "filled" : "outline"}
        m={0}
        cardRef={cardRef}
        width={`${collapse ? 8 : width}px`} 
        minW={collapse ? "8px" : "fit-content"}
        cursor={collapse ? "col-resize" : "inherit"}
        onMouseDown={() => setDrag(collapse)}
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
        cursor={collapse ? "col-resize" : "col-resize"}
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