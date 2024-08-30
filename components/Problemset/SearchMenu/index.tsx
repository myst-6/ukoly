import { FocusLock, FormLabel, IconButton, Input, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

export interface SearchMenuProps {
  onChange: (search: string) => void;
}

export const SearchMenu = ({
  onChange,
}: SearchMenuProps) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const ref = useRef<HTMLInputElement>(null);

  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    onChange(search);
  }, [onChange, search]);

  return (  
    <Popover
      isOpen={isOpen}
      initialFocusRef={ref}
      onOpen={onOpen}
      onClose={onClose}
      placement="bottom"
    >
      <PopoverTrigger>
        <IconButton 
          icon={<FaSearch />} 
          aria-label="" 
          variant="filled" 
        />
      </PopoverTrigger>
      <PopoverContent p={5}>
        <FocusLock persistentFocus={false}>
          <PopoverArrow />
          <PopoverCloseButton />
          <FormLabel>Title</FormLabel>
          <Input 
            ref={ref} 
            onChange={ev => setSearch(ev.currentTarget.value)} 
            onKeyDown={ev => ev.key === "Enter" && onClose()}
          />
        </FocusLock>
      </PopoverContent>
    </Popover>
  );
};