import { Box } from "../Box";
import { Link } from "../Link";
import { Text } from "../Text";
import { VStack } from "../Stack";
import { PageInfo, pages } from "content";

export interface HeaderProps {
  page: PageInfo;
}

export const Header = ({ page }: HeaderProps) => {
  return <Box
    as="header"
    display="flex"
    justifyContent="center"
    borderBottomWidth={1}
    boxShadow="0 0.5px lightgray"  
  >
    <Box width="xl">
      <VStack 
        flex={1} 
        backgroundColor="lightgray.200"
        padding="1em"
        flexDirection="row"
        gap="5em"
        justifyContent="space-around"
      >
        {
          Object.entries(pages).map(([key, linkedPage]) => {
            return (
              <Link href={linkedPage.path} current={page === linkedPage} key={key}>
                <Text 
                  typography="display.small" 
                  fontWeight={page === linkedPage ? 500 : 300}
                >
                  {linkedPage.display}
                </Text>
              </Link>
            );
          })
        }
      </VStack>
    </Box>
  </Box>
};
