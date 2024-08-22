import { Box, Flex, Header, Text } from "components";
import { pages } from "content";

export default function BIO1() {
  return (
    <>
      <Header page={pages.bio1} />
      <Flex
          as="main"
          overflow="auto"
          maxWidth="100%"
          px={5}
          py={2}
          justifyContent="center"
        >
        <Box width="4xl">
          <Text typography="display.small">About</Text>
          <Text typography="body.medium">
            These problems are generally easier, so solutions will likely come later than the BIO2 solutions.
            This is foo bar for now.
          </Text>
        </Box>
      </Flex>
    </>
  );
}
