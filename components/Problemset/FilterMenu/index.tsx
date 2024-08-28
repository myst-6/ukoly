import { IconButton, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";
import { ProblemInfo, Tag } from "content";
import { FaFilter } from "react-icons/fa";
import { useGroup } from "./hook";

export interface FilterMenuProps {
  problems: ProblemInfo[];
  onYearChange: (allowed: number[]) => void;
  onTagChange: (allowed: Tag[]) => void;
}

type Heatmap<T> = Map<T,number>;

export const FilterMenu = ({ 
  problems, 
  onYearChange, 
  onTagChange 
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
  }, new Map()).entries()].sort(([ _tagA, countA ], [ _tagB, countB ]) => {
    return countB - countA;
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

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={IconButton}
        aria-label="Filter"
        icon={<FaFilter />}
        variant="filled"
      />
      <MenuList maxH="sm" overflowY="auto">
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
      </MenuList>
    </Menu>
  );
};