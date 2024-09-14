import { Text, Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { Box } from "components";

export const SSelector = ({name, opts, opt, onSelect}: any) => {
    return (
        <Box display="flex" alignItems="center">
            <Text ml={2} fontSize="lg" padding="0.75em">{name}: </Text>
            <Menu>
                <MenuButton as={Button}>{opts[opt]}</MenuButton>
                <MenuList maxHeight="20vh" overflowY="auto">
                    {Object.entries(opts).map(([key, label]:any) => {
                        return <MenuItem key={key} onClick={()=>onSelect(key)}>{label}</MenuItem>
                    })}
                </MenuList>
            </Menu>
        </Box>
    )
}