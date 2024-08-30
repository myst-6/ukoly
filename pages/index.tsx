import { Box, Divider, Flex, Header, Profile, SimpleGrid, Text } from "components";
import { pages, people } from "content";

export default function Home() {
  return (
    <>
      <Header page={pages.home} />
      <Flex
          as="main"
          overflow="auto"
          maxWidth="100%"
          px={5}
          py={2}
          justifyContent="center"
          height="100%"
        >
        <Box width={["xs", "md", "xl", "2xl", "4xl"]}>
          <Text typography="display.small">About</Text>
          <Text typography="body.medium">
            This is a project aimed towards providing more information and assistance
            to students in the UK studying for the British Informatics Olympiad.
            Here you can find many editorials and solutions to old problems from both rounds.
            The set of problems covered by this site is far from complete, but more problems 
            will be added over time.
          </Text>
          <Divider mb={3} mt={3} />
          <Text typography="display.small">Authors</Text>
          <Text typography="body.medium">
            If you want to contribute, message Boris on discord by clicking the discord icon by his name.
          </Text>
          <SimpleGrid mt={2} columns={2} gap={4}>
            {
              ...people.map((info, index) => {
                return <Profile key={index} person={info} />;
              })
            }
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
}
