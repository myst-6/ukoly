import { HStack, IconButton, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";
import { difficulties, Difficulty, ProblemInfo, Question, Tag } from "content";
import { FaFilter } from "react-icons/fa";
import { useGroup } from "./hook";

export interface FilterMenuProps {
  problems: ProblemInfo[];
  onYearChange: (allowed: number[]) => void;
  onQuestionNumberChange: (allowed: Question[]) => void;
  onTagChange: (allowed: Tag[]) => void;
  onDiffChange: (allowed: Difficulty[]) => void;
}

type Heatmap<T> = Map<T,number>;

export const FilterMenu = ({ 
  problems, 
  onYearChange, 
  onQuestionNumberChange,
  onTagChange,
  onDiffChange,
}: FilterMenuProps) => {
  const years = [...problems.reduce<Heatmap<number>>((map, { year }) => {
    const curr = map.get(year) || 0;
    map.set(year, curr + 1);
    return map;
  }, new Map()).entries()].sort(([ yearA ], [ yearB ]) => {
    return yearA - yearB;
  });

  const tags = [...problems.reduce<Heatmap<Tag>>((map, { tags }) => {
    for (const tag of tags) {
      const curr = map.get(tag) || 0;
      map.set(tag, curr + 1);
    }
    return map;
  }, new Map()).entries()].sort(([ tagA ], [ tagB ]) => {
    return tagA.localeCompare(tagB);
  });

  const diffs = [...problems.reduce<Heatmap<Difficulty>>((map, { difficulty }) => {
    const curr = map.get(difficulty) || 0;
    map.set(difficulty, curr + 1);
    return map;
  }, new Map()).entries()].sort(([ difficultyA ], [ difficultyB ]) => {
    return difficulties.indexOf(difficultyA) - difficulties.indexOf(difficultyB);
  });

  const questionNumbers = [...problems.reduce<Heatmap<Question>>((map, { question }) => {
    if (question === undefined) return map;
    const curr = map.get(question) || 0;
    map.set(question, curr + 1);
    return map;
  }, new Map()).entries()].sort(([ questionNumber1 ], [ questionNumber2 ]) => {
    return questionNumber1 - questionNumber2;
  });

  const allYears = years.map(([ year ]) => year);
  const { 
    value: yearValue, 
    toggle: toggleYear, 
    toggleAll: toggleAllYears 
  } = useGroup(allYears, onYearChange);

  const allTags = tags.map(([ tag ]) => tag);
  const { 
    value: tagValue, 
    toggle: toggleTag, 
    toggleAll: toggleAllTags 
  } = useGroup(allTags, onTagChange);

  const allDiffs = diffs.map(([ diff ]) => diff);
  const { 
    value: diffValue, 
    toggle: toggleDiff, 
    toggleAll: toggleAllDiffs 
  } = useGroup(allDiffs, onDiffChange);

  const allQuestionNumbers = questionNumbers.map(([ questionNumber ]) => questionNumber);
  const { 
    value: questionNumberValue, 
    toggle: toggleQuestionNumber, 
    toggleAll: toggleAllQuestionNumbers 
  } = useGroup(allQuestionNumbers, onQuestionNumberChange);

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={IconButton}
        aria-label="Filter"
        icon={<FaFilter />}
        variant="filled"
      />
      <MenuList maxH="sm" overflowY="auto">
        <HStack alignItems="flex-start">
          <MenuOptionGroup 
            title="Year" 
            type="checkbox"
            overflowY="auto"
            value={yearValue.map(year => String(year))} 
          >
            <MenuItemOption value="all" onClick={() => toggleAllYears()}>
              Toggle All
            </MenuItemOption>
            {
              years.map(([ year, count ], index) => {
                return (
                  <MenuItemOption 
                    value={String(year)} 
                    onClick={() => toggleYear(year)} 
                    key={index}
                  >
                    {`${year} (${count})`}
                  </MenuItemOption>
                );
              })
            }
          </MenuOptionGroup>
          {questionNumbers.length > 0 && <MenuOptionGroup 
            title="Question Number" 
            type="checkbox"
            overflowY="auto"
            value={questionNumberValue.map(questionNumber => String(questionNumber))}
          >
            <MenuItemOption value="all" onClick={() => toggleAllQuestionNumbers()}>
              Toggle All
            </MenuItemOption>
            {
              questionNumbers.map(([ questionNumber, count ], index) => {
                return (
                  <MenuItemOption 
                    value={String(questionNumber)} 
                    onClick={() => toggleQuestionNumber(questionNumber)} 
                    key={index}
                  >
                    {`Q${questionNumber} (${count})`}
                  </MenuItemOption>
                );
              })
            }
          </MenuOptionGroup>}
          <MenuOptionGroup 
            title="Difficulty" 
            type="checkbox"
            overflowY="auto"
            value={diffValue} 
          >
            <MenuItemOption value="all" onClick={() => toggleAllDiffs()}>
              Toggle All
            </MenuItemOption>
            {
              diffs.map(([ diff, count ], index) => {
                return (
                  <MenuItemOption 
                    value={diff} 
                    onClick={() => toggleDiff(diff)} 
                    key={index}
                  >
                    {`${diff} (${count})`}
                  </MenuItemOption>
                );
              })
            }
          </MenuOptionGroup>
          <MenuOptionGroup 
            title="Tag" 
            type="checkbox"
            overflowY="auto"
            value={tagValue} 
          >
            <MenuItemOption value="all" onClick={() => toggleAllTags()}>
              Toggle All
            </MenuItemOption>
            {
              tags.map(([ tag, count ], index) => {
                return (
                  <MenuItemOption 
                    value={tag} 
                    onClick={() => toggleTag(tag)} 
                    key={index}
                  >
                    {`${tag} (${count})`}
                  </MenuItemOption>
                );
              })
            }
          </MenuOptionGroup>
        </HStack>
      </MenuList>
    </Menu>
  );
};