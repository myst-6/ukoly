import { HStack, IconButton, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";
import { Text } from "../../Text";
import { difficulties, Difficulty, ProblemInfo, Tag } from "content";
import { FaFilter } from "react-icons/fa";
import { useGroup } from "./hook";

export interface FilterMenuProps {
  problems: ProblemInfo[];
  onYearChange: (allowed: number[]) => void;
  onTagChange: (allowed: Tag[]) => void;
  onDiffChange: (allowed: Difficulty[]) => void;
  isNarrow?: boolean;
}

type Heatmap<T> = Map<T,number>;

export const FilterMenu = ({ 
  problems, 
  onYearChange, 
  onTagChange,
  onDiffChange,
  isNarrow = false,
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

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={IconButton}
        aria-label="Filter"
        icon={<FaFilter size="100%" />}
        variant="filled"
        height="100%"
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
              <Text typography={isNarrow ? "body.large" : "body.medium"}>
                Toggle All
              </Text>
            </MenuItemOption>
            {
              years.map(([ year, count ], index) => {
                return (
                  <MenuItemOption 
                    value={String(year)} 
                    onClick={() => toggleYear(year)} 
                    key={index}
                  >
                    <Text typography={isNarrow ? "body.large" : "body.medium"}>
                      {`${year} (${count})`}
                    </Text>
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
              <Text typography={isNarrow ? "body.large" : "body.medium"}>
                Toggle All
              </Text>
            </MenuItemOption>
            {
              tags.map(([ tag, count ], index) => {
                return (
                  <MenuItemOption 
                    value={tag} 
                    onClick={() => toggleTag(tag)} 
                    key={index}
                  >
                    <Text typography={isNarrow ? "body.large" : "body.medium"}>
                      {`${tag} (${count})`}
                    </Text>
                  </MenuItemOption>
                );
              })
            }
          </MenuOptionGroup>
          <MenuOptionGroup 
            title="Difficulty" 
            type="checkbox"
            overflowY="auto"
            value={diffValue} 
          >
            <MenuItemOption value="all" onClick={() => toggleAllDiffs()}>
            <Text typography={isNarrow ? "body.large" : "body.medium"}>
              Toggle All
            </Text>
            </MenuItemOption>
            {
              diffs.map(([ diff, count ], index) => {
                return (
                  <MenuItemOption 
                    value={diff} 
                    onClick={() => toggleDiff(diff)} 
                    key={index}
                  >
                    <Text typography={isNarrow ? "body.large" : "body.medium"}>
                      {`${diff} (${count})`}
                    </Text>
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