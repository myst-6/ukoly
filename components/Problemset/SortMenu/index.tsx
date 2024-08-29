import { IconButton, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";

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
          {
            ...(["Year", "Difficulty", "Title"] as const).flatMap(prop => {
              return [false, true].map(asc => {
                const value = `${prop}${+asc}`;
                return (
                  <MenuItemOption 
                    key={value} 
                    value={value} 
                    onClick={() => setSort({ prop, asc })}>
                    {prop} ({asc ? "Asc" : "Desc"})
                  </MenuItemOption>
                );
              });
            })
          }
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};