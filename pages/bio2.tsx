import { Box, Divider, Flex, Header, Problemset, Text } from "components";
import { bio2Problems, pages } from "content";

export default function BIO2() {
  return (
    <>
      <Header page={pages.bio2} />
      <Flex
          as="main"
          overflow="auto"
          maxWidth="100%"
          px={5}
          py={2}
          justifyContent="space-around"
        >
        <Box maxWidth="85%" p={0}>
          <Text typography="display.small">About</Text>
          <Text typography="body.medium">
            These problems are all available on the online grader given to you after receiving
            an invitation to the BIO Finals. To respect the organisers&apos; wishes, we will not provide a grader
            here, but we will provide editorials and AC solutions.
          </Text>
          <Divider mb={3} mt={3} />
          <Box maxWidth="full" overflow="hidden" p={0}>
            <Problemset problems={bio2Problems} />
          </Box>
        </Box>
      </Flex>
    </>
  );
}
