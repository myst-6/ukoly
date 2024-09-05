import { IconButton, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from "@chakra-ui/react";
import { Text } from "../../Text";
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
  isNarrow?: boolean;
}

export const ShowMenu = ({ 
  onChange,
  isNarrow = false,
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
        icon={<BiSolidHide size="100%" />}
        variant="filled"
        height="100%"
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
            <Text typography={isNarrow ? "body.large" : "body.medium"}>
              Problem Difficulty
            </Text>
          </MenuItemOption>
          <MenuItemOption 
            type="checkbox"
            value={show.showTags ? "tags" : "hidden"}
            onClick={() => setShow(({ showDiff, showTags }) => ({ showDiff: showDiff, showTags: !showTags }))}
          >
            <Text typography={isNarrow ? "body.large" : "body.medium"}>
              Problem Tags
            </Text>
          </MenuItemOption>
          
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
