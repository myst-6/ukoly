import { Box } from "../Box";
import { Link } from "../Link";
import { Text } from "../Text";
import { HStack, VStack } from "../Stack";
import { PageInfo, pages } from "content";
import { Flex, Switch, useColorMode } from "@chakra-ui/react";

export interface HeaderProps {
  page: PageInfo;
}

export const Header = ({ page }: HeaderProps) => {
  const { colorMode, setColorMode } = useColorMode();
  

  return <Flex
    as="header"
    borderBottomWidth={1}
    boxShadow="0 0.5px lightgray"  
    className={colorMode}
    width="100%"
  >
    <HStack flex={1} justifyContent="space-around">
      <Box />
      <Box width={["xs", "sm", "md"]}>
        <HStack
          flex={1} 
          backgroundColor="lightgray.200"
          padding="1em"
          justifyContent="space-around"
        >
          {
            Object.entries(pages).map(([key, linkedPage]) => {
              return (
                <Link href={linkedPage.path} current={page === linkedPage} key={key}>
                  <Text 
                    typography="display.small" 
                    color={colorMode === "dark" ? "white" : "black"}
                    fontWeight={page === linkedPage ? 500 : 300}
                    flexWrap={"nowrap"}
                  >
                    {linkedPage.display}
                  </Text>
                </Link>
              );
            })
          }
        </HStack>
      </Box>
      <VStack justifyContent="flex-end">
        <Text typography="body.medium">Dark Mode</Text>
        <Switch 
          isChecked={colorMode === "dark"}
          onChange={event => setColorMode(event.target.checked ? "dark" : "light")}
        />
      </VStack>
    </HStack>
  </Flex>
};
