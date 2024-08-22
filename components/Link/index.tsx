import NextLink from "next/link";
import { Link as ChakraLink, type LinkProps as ChakraLinkProps } from "@chakra-ui/next-js";

export interface LinkProps extends ChakraLinkProps {
  current?: boolean;
}

export const Link = ({ children, current, ...props }: LinkProps) => {
  return <ChakraLink 
    as={NextLink} 
    borderRadius={5}
    padding={1}
    _hover={current ? {} : { backgroundColor: "gray.100" }} 
    {...props}>
      {children}
  </ChakraLink>;
};