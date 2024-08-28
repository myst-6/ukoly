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
import { Wrap, WrapItem } from "@chakra-ui/react";

export interface ProblemsetProps {
  problems: ProblemInfo[];
}

export const Problemset = ({ problems }: ProblemsetProps) => {
  const { problem, setProblem } = useProblemset(problems);
  const [width, setWidth] = useState<number>(0);
  const [drag, setDrag] = useState<boolean>(false);

  const [collapseLeft, setCollapseLeft] = useState<boolean>(false);
  const [limitLeft, setLimitLeft] = useState<number>(0);

  const [collapseRight, setCollapseRight] = useState<boolean>(false);
  const [limitRight, setLimitRight] = useState<number>(0);

  const grabRef = useRef<HTMLDivElement>(null);
  const cardRefLeft = useRef<HTMLDivElement>(null);
  const cardRefRight = useRef<HTMLDivElement>(null);

  const onMouseMove = (ev: MouseEvent) => {
    if (!drag) return;
    if (grabRef.current === null) return;
    if (cardRefLeft.current === null) return;
    if (cardRefRight.current === null) return;

    // get x-coordinate of left side of box
    const { left } = ev.currentTarget.getBoundingClientRect();
    
    // get left padding of bar being dragged
    const { paddingLeft } = getComputedStyle(grabRef.current);
    const pl = parseFloat(paddingLeft);

    // go halfway into the bar
    const x = ev.clientX - left - pl;

    // check if in collapsing territory for left side
    {
      const { width } = getComputedStyle(cardRefLeft.current);
      const w = parseFloat(width);
      if (!collapseLeft && x <= w / 4) {
        setCollapseLeft(true);
        setLimitLeft(Math.max(x + 2, w / 4)); // +2 to prevent flicker
      } else if (collapseLeft && x >= limitLeft) {
        setCollapseLeft(false);
      }
    }

    // check if in collapsing territory for right side
    {
      const { left: side } = cardRefRight.current.getBoundingClientRect();
      const { width } = getComputedStyle(cardRefRight.current);
      const w = parseFloat(width);
      if (!collapseRight && x >= side - left + 3 * w / 4) {
        setCollapseRight(true);
        setLimitRight(Math.min(x - 2, side - left + 3 * w / 4)); // -2 to prevent flicker
      } else if (collapseRight && x <= limitRight) {
        setCollapseRight(false);
      }
    }

    setWidth(x);
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
        variant={collapseLeft ? "filled" : "outline"}
        m={0}
        cardRef={cardRefLeft}
        flex={collapseRight ? 1 : undefined}
        width={`${collapseLeft ? 8 : width}px`} 
        minW={collapseLeft ? "8px" : "md"}
        cursor={collapseLeft ? "col-resize" : "inherit"}
        onMouseDown={() => setDrag(collapseLeft)}
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
          <Wrap justify="center" overflowY="auto">
            {
              ...problems.map((problem) => {
                return (
                  <WrapItem p={1} key={problem.display}>
                    <Problem problem={problem} onChoose={() => setProblem(problem)} />
                  </WrapItem>
                );
              })
            }
          </Wrap>
        </VStack>
      </Card>
      <Spacer 
        p={1}
        flex={0} 
        ref={grabRef}
        cursor={(collapseLeft || collapseRight) ? "col-resize" : "col-resize"}
        onMouseDown={() => setDrag(true)}
      >
        <Divider orientation="vertical" />
      </Spacer>
      <Card 
        variant={collapseRight ? "filled" : "outline"}
        cardRef={cardRefRight}
        flex={collapseRight ? 0 : 1}
        width={collapseRight ? "8px" : "auto"} 
        minW={collapseRight ? "8px" : "md"}
        cursor={collapseRight ? "col-resize" : "inherit"}
        onMouseDown={() => setDrag(collapseRight)}
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