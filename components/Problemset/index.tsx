import { difficulties, Difficulty, ProblemInfo, Tag } from "content";
import { Box } from "../Box";
import { Card } from "../Card";
import { Divider } from "../Divider";
import { Flex } from "../Flex";
import { Problem } from "../Problem";
import { Spacer } from "../Spacer";
import { HStack, VStack } from "../Stack";
import { Solution } from "../Solution";
import { SolutionSkeleton } from "../SolutionSkeleton";
import { Text } from "../Text";
import { Wrap, WrapItem } from "../Wrap";
import { useProblemset } from "./hook";
import { MouseEvent, useRef, useState } from "react";
import { FilterMenu } from "./FilterMenu";
import { defaultSort, Sort, SortMenu } from "./SortMenu";
import { SearchMenu } from "./SearchMenu";

export interface ProblemsetProps {
  problems: ProblemInfo[];
}

export const Problemset = ({ problems }: ProblemsetProps) => {
  const { problem, setProblem } = useProblemset(problems);
  
  const [allowedYears, setAllowedYears] = useState<number[]>();
  const [allowedTags, setAllowedTags] = useState<Tag[]>();
  const [allowedDiffs, setAllowedDiffs] = useState<Difficulty[]>();

  const [sort, setSort] = useState<Sort>(defaultSort);
  const [search, setSearch] = useState<string>("");

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
        setLimitLeft(Math.max(x + 8, w / 4)); // +8 to prevent flicker
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
        setLimitRight(Math.min(x - 8, side - left + 3 * w / 4)); // -8 to prevent flicker
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
          h="65vh"
        >
          <HStack spacing={2} justifyContent="center">
            <Text p={1} typography="display.small">Problems</Text>
            <FilterMenu 
              problems={problems} 
              onYearChange={allowed => setAllowedYears(allowed)}
              onTagChange={allowed => setAllowedTags(allowed)}
              onDiffChange={allowed => setAllowedDiffs(allowed)}
            />
            <SortMenu onChange={sort => setSort(sort)} />
            <SearchMenu  onChange={search => setSearch(search)} />
          </HStack>
          <Wrap justify="center" overflowY="auto">
            {
              ...problems
                .filter(problem => {
                  if (!problem.display.toLowerCase().includes(search.trim().toLowerCase())) {
                    return false;
                  }
                  if (allowedYears) {
                    if (!allowedYears.includes(problem.year)) {
                      return false;
                    }
                  }
                  if (allowedDiffs) {
                    if (!allowedDiffs.includes(problem.difficulty)) {
                      return false;
                    }
                  }
                  if (allowedTags) {
                    for (const tag of problem.tags) {
                      if (allowedTags.includes(tag)) {
                        return true;
                      }
                    }
                    return false;
                  }
                  return true;
                })
                .sort((problemA, problemB) => {
                  const res = 
                    sort.prop === "Year" ? problemA.year - problemB.year :
                    sort.prop === "Difficulty" ? 
                      difficulties.indexOf(problemA.difficulty) -
                      difficulties.indexOf(problemB.difficulty) :
                    problemA.display.localeCompare(problemB.display);
                    return sort.asc ? res : -res;
                  })
                .map(problem => {
                  return (
                    <WrapItem p={1} key={problem.display}>
                      <Problem problem={problem} onChoose={() => setProblem(problem)} />
                    </WrapItem>
                  );
                })
                .reduce<JSX.Element[]>((res, curr, index) => {
                  if (index === 0) return [curr];
                  else return [...res, curr];
                }, [
                  <Text typography="title.large" key={0}>
                    No problems found!
                  </Text>
                ])
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
        <VStack maxWidth="full" spacing={1} h="65vh" alignItems="left">
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