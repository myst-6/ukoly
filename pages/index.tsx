import { Box, Divider, Flex, Header, Link, Profile, SimpleGrid, Spacer, Text } from "components";
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
          py={5}
          justifyContent="center"
          height="100%"
        >
        <Box width={["xs", "md", "xl", "2xl", "4xl"]}>
          <Text typography="display.small">About the British Informatics Olympiad</Text>
          <Text typography="body.medium" paddingTop="0.5em">
            The British Informatics Olympiad (<Link href={`https://olympiad.org.uk/`}>BIO</Link>) is a competition for secondary-aged students in the UK, which 
            is used to select the UK team for the International Olympiad in Informatics (<Link href={`https://ioinformatics.org/`}>IOI</Link>).
            The competition is split into two rounds. Round 1 is open 
            to everyone, and it is a 3-hour paper with 3 questions. Round 2
            is held at Trinity College, Cambridge, and the top 15 students 
            from the first round are invited to participate.
          </Text>
          <Divider mb={3} mt={3} />
          <Text typography="display.small">About this website</Text>
          <Text typography="body.medium" paddingTop="0.5em">
            This website is aimed towards providing more information and assistance
            to students in the UK studying for the BIO.
            Here you can find a grader (automatic marker) for all Round 1 problems
            since 2000, and model solutions written by past finalists and high-scorers 
            for all of these problems. You can also find solutions to many 
            Round 2 problems since 2016, but the list is not yet complete.
          </Text>
          <Divider mb={3} mt={3} />
          <Text typography="display.small">Authors</Text>
          <Text typography="body.medium">
            If you wish to contribute, please message Boris on Discord by clicking the Discord icon by his name.
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
          <Spacer height={6} />
        </Box>
      </Flex>
    </>
  );
}
