import { IconButton, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiSolidHide } from "react-icons/bi";

export interface Show {
  showDiff: boolean;
  showTags: boolean;
}

export const defaultShow: Show = {
  showDiff: true,
  showTags: true,
};

export interface ShowMenuProps {
  onChange: (show: Show) => void;
}

export const ShowMenu = ({ 
  onChange
}: ShowMenuProps) => {
  const [show, setShow] = useState<Show>(defaultShow);

  useEffect(() => {
    onChange(show);
  }, [onChange, show]);

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={IconButton}
        aria-label="Show"
        icon={<BiSolidHide />}
        variant="filled"
      />
      <MenuList maxH="sm" overflowY="auto">
        <MenuOptionGroup 
          title="Show" 
          type="checkbox"
          overflowY="auto"
          defaultValue="diff+tags"
        >
          <MenuItemOption 
            type="checkbox"
            value={show.showDiff ? "diff" : "hidden"}
            onClick={() => setShow(({ showDiff, showTags }) => ({ showDiff: !showDiff, showTags: showTags }))}
          >
            
            {"Problem Difficulty"}
          </MenuItemOption>
          <MenuItemOption 
            type="checkbox"
            value={show.showTags ? "tags" : "hidden"}
            onClick={() => setShow(({ showDiff, showTags }) => ({ showDiff: showDiff, showTags: !showTags }))}
          >
            {"Problem Type"}
          </MenuItemOption>
          
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
