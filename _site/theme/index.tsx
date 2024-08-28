import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

import * as foundations from "./foundations";
export * from "./foundations";

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

export const theme = extendTheme({
    config,
    ...foundations,
});