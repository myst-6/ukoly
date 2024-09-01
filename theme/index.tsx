import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

import * as foundations from "./foundations";
export * from "./foundations";

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
};

export const theme = extendTheme({
    config,
    ...foundations,
});