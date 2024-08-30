import { Icon, IconButton, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";
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
}

export const SortMenu = ({ 
  onChange
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
        icon={<FaSort />}
        variant="filled"
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
          >
            <Icon 
              as={sort.asc ? FaSortAmountUp : FaSortAmountDown} 
              display="inline"
              mr={2}
            />
            {sort.asc ? "Ascending" : "Descending"}
          </MenuItemOption>
          {
            ...(["Year", "Difficulty", "Title"] as const).flatMap(prop => {
              return (
                <MenuItemOption 
                  key={prop} 
                  value={prop} 
                  onClick={() => setSort(({ prop: _oldProp, asc }) => ({ prop, asc }))}>
                  {prop}
                </MenuItemOption>
              );
            })
          }
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};