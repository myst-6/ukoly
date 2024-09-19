import { Text, Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { Box } from "components";

export interface SSelectorProps {
    name: string;
    opts: string[];
    opt: number;
    onSelect: (opt: number) => void;
    disabled?: boolean;
}

export const SSelector = ({ name, opts, opt, onSelect, disabled }: SSelectorProps) => {
    return (
        <Box display="flex" alignItems="center">
            <Text ml={2} fontSize="lg" padding={4} pl={0}>{name}: </Text>
            <Menu>
                <MenuButton as={Button} isLoading={disabled}>{opts[opt]}</MenuButton>
                <MenuList maxHeight="20vh" overflowY="auto">
                    {opts.map((label, opt) => {
                        return (
                            <MenuItem key={opt} onClick={() => onSelect(opt)}>
                                {label}
                            </MenuItem>
                        );
                    })}
                </MenuList>
            </Menu>
        </Box>
    );
}