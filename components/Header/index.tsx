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
      <Box>
        <HStack
          flex={1} 
          backgroundColor="lightgray.200"
          padding="1em"
          justifyContent="center"
          spacing="3em"
        >
          {
            Object.entries(pages).map(([key, linkedPage]) => {
              return <>
                <Text 
                  key={key}
                  typography={["display.xxs", null, "display.xs", null, "display.small"]}
                  fontWeight={page === linkedPage ? 500 : 300}>
                  <Link 
                    href={linkedPage.path} 
                    current={page === linkedPage} 
                    color={colorMode === "dark" ? "white" : "black"}
                    display="block"
                    width="max-content">
                    {linkedPage.display}
                  </Link>
                </Text>
              </>;
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
