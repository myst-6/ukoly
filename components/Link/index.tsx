import NextLink from "next/link";
import { Link as ChakraLink, type LinkProps as ChakraLinkProps } from "@chakra-ui/next-js";
import { useColorMode } from "@chakra-ui/react";

export interface LinkProps extends ChakraLinkProps {
  current?: boolean;
}

export const Link = ({ children, current, ...props }: LinkProps) => {
  const { colorMode } = useColorMode();

  return <ChakraLink 
    as={NextLink} 
    borderRadius={5}
    padding={1}
    color={colorMode === "dark" ? "lightblue" : "blue"}
    _hover={current ? {} : { backgroundColor: colorMode === "dark" ? "gray.600" : "gray.100" }} 
    {...props}>
      {children}
  </ChakraLink>;
};
