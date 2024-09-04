import { Box, Divider, Flex, Header, Profile, SimpleGrid, Text } from "components";
import { pages, people } from "content";

function cmp(a: string, b: string) {
  let names1 = a.split(" ");
  let names2 = b.split(" ");

  let surname1 = names1.slice(-1)[0];
  let surname2 = names2.slice(-1)[0];
  if (!(surname1 && surname2)) return a.localeCompare(b);

  if (names1.slice(-1)[0] != names2.slice(-1)[0]) 
      return surname1.localeCompare(surname2);
  return a.localeCompare(b);
}

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
          mb={20}
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

          <Text typography='title.large' padding="5% 0% 0% 0%">Managers</Text>
          <Divider mb={3} mt={3} />
          <SimpleGrid mt={2} columns={2} gap={4}>
            {
              ...people
                .filter((info, _) => info.roles.includes("Manager"))
                .sort((a, b) => cmp(a.name, b.name))
                .map((info, index) => {
                  return <Profile key={index} person={info} />;
                })
            }
          </SimpleGrid>

          <Text typography='title.large' padding="5% 0% 0% 0%">Developers</Text>
          <Divider mb={3} mt={3} />
          <SimpleGrid mt={2} columns={2} gap={4}>
            {
              ...people
                .filter((info, _) => info.roles.includes("Developer") && !info.roles.includes("Manager"))
                .sort((a, b) => cmp(a.name, b.name))
                .map((info, index) => {
                  return <Profile key={index} person={info} />;
                })
            }
          </SimpleGrid>

          <Text typography='title.large' padding="5% 0% 0% 0%">Contributors</Text>
          <Divider mb={3} mt={3} />
          <SimpleGrid mt={2} columns={2} gap={4}>
            {
              ...people
                .filter((info, _) => !info.roles.includes("Developer") && !info.roles.includes("Manager"))
                .sort((a, b) => cmp(a.name, b.name))
                .map((info, index) => {
                  return <Profile key={index} person={info} />;
                })
            }
          </SimpleGrid>

        </Box>
      </Flex>
    </>
  );
}
