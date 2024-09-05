import { Icon, IconButton, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";
import { Text } from "../../Text";
import { useEffect, useState } from "react";
import { FaSort, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

export interface Sort {
  prop: "Difficulty" | "Year" | "Title";
  asc: boolean;
}

export const defaultSort: Sort = {
  prop: "Year",
  asc: true,
};

export interface SortMenuProps {
  onChange: (sort: Sort) => void;
  isNarrow?: boolean;
}

export const SortMenu = ({ 
  onChange,
  isNarrow = false,
}: SortMenuProps) => {
  const [sort, setSort] = useState<Sort>(defaultSort);

  useEffect(() => {
    onChange(sort);
  }, [onChange, sort]);

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={IconButton}
        aria-label="Sort"
        icon={<FaSort size="100%" />}
        variant="filled"
        height="100%"
      />
      <MenuList maxH="sm" overflowY="auto">
        <MenuOptionGroup 
          title="Sort" 
          type="checkbox"
          overflowY="auto"
          value={`${sort.prop}${+sort.asc}`}
        >
          <MenuItemOption 
            value={"dir"}
            onClick={() => setSort(({ prop, asc }) => ({ prop, asc: !asc }))}
            // height="3rem"
          >
            <Icon 
              as={sort.asc ? FaSortAmountUp : FaSortAmountDown} 
              display="inline"
              mr={2}
            />
            <Text 
              display="inline" 
              typography={isNarrow ? "body.large" : "body.medium"}
            >
              {sort.asc ? "Ascending" : "Descending"}
            </Text>
          </MenuItemOption>
          {
            ...(["Year", "Difficulty", "Title"] as const).flatMap(prop => {
              return (
                <MenuItemOption 
                  key={prop} 
                  value={prop} 
                  onClick={() => setSort(({ prop: _oldProp, asc }) => ({ prop, asc }))}>
                  <Text typography={isNarrow ? "body.large" : "body.medium"}>
                    {prop}
                  </Text>
                </MenuItemOption>
              );
            })
          }
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};