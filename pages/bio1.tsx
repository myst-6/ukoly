import { Box, Divider, Flex, Header, Problemset, Text} from "components";
import { bio1Problems, pages } from "content";

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
          justifyContent="space-around"
        >
        <Box maxWidth="85%" p={0}>
          <Text typography="display.small">About</Text>
          <Text typography="body.medium">
            These problems don't have an online grader at any point, but the test data 
            is publicly available along with the problems. At some point in the future, I 
            plan to add a grading system for BIO1 so you can check your program against the
            publicly available test data.
          </Text>
          <Divider mb={3} mt={3} />
          <Box maxWidth="full" p={0}>
            <Problemset problems={bio1Problems} />
          </Box>
        </Box>
      </Flex>
    </>
  );
}
