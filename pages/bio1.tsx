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
            During your participation, you will not have access to an online grader. However, for all past problems listed on this site,
            you may test your code by heading to the 'Grader' tab where your code will automatically be run against the publicly-available
            test data for the problem, to save you time testing when preparing for the competition. Furthermore, when you view the solution 
            to a problem you may test the model code against custom inputs to see how they respond.
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
