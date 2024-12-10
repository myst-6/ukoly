import { Box, Flex, Header, Link, Text} from "components";
import { pages } from "content";

export default function BIO1() {
  return (
    <>
      <Header page={pages.pctc} />
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
            The Perse Coding Team Challenge (PCTC) is a team-based UK programming competition for secondary 
            school students who are in Y11 or below. Below, you can find an extensive set of video editorials
            for <b>every</b> modern PCTC problem in the competition, made by <Link href="https://www.youtube.com/@sourishsharma17">Sourish Sharma</Link>.
            We saw this being advertised and had to add it to our website, since it aligns with our goal of
            helping students improve at coding and prepare for various coding competitions! Please make sure
            to check out his channel; the link to the PCTC solution videos are below!
          </Text>

          <Text typography="display.medium" textAlign="center" mt={10}>
            <Link href="https://www.youtube.com/@sourishsharma17/playlists">
              Video Playlists
            </Link>
          </Text>
        </Box>
      </Flex>
    </>
  );
}
