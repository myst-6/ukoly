import { Box, Flex, Header, Link, Text } from "components";
import { pages } from "content";

export default function Resources() {
  return (
    <>
      <Header page={pages.resources} />
      <Flex
        as="main"
        overflow="auto"
        maxWidth="100%"
        px={5}
        py={5}
        justifyContent="center"
        height="100%"
      >
        <Box width={["xs", "md", "xl", "2xl", "4xl"]} sx={{
          "& > *": {
            paddingBottom: "0.5em",
          },
        }}>
          <Text typography="display.small">USA Computing Olympiad Guide</Text>
          <Text typography="body.medium">
            The USACO Guide is a free platform that provides 
            resources to help students prepare for the USA Computing Olympiad.
            It includes a comprehensive collection of problems,
            editorials, and guides to help students improve their
            problem-solving skills. You can find the USACO Guide
            <Link href="https://usaco.guide/">here</Link>. 
          </Text>
          <Text typography="body.medium">
            We have attempted to keep this site as self-contained as possible,
            but there are some topics that are not covered in detail here 
            because they are covered in the USACO Guide. The most 
            important section for BIO students is the section on 
            <Link href="https://usaco.guide/bronze/time-comp?lang=py">time complexity</Link>,
            because many of the editorials on this site mention 
            time complexity, and it is important to understand
            how to calculate it to solve problems efficiently.
          </Text>
          <Text typography="display.small" paddingTop="0.5em">Perse Coding Challenge</Text>
          <Text typography="body.medium">
            The Perse Coding Team Challenge (<Link href="https://pctc.perse.co.uk/">PCTC</Link>) 
            is a UK team-based programming competition for secondary school 
            students in Y11 or below. It is a great starting point for 
            those new to competitive programming and provides a pathway 
            to tackling harder BIO problems. Find the problems and 
            grader <Link href="https://pctc.perse.co.uk/">here</Link>.
          </Text>
          <Text typography="body.medium">
            Sourish Sharma has created model solutions for every 
            past PCTC problem. Check them out on his 
            <Link href="https://www.youtube.com/@sourishsharma17">YouTube channel</Link>. 
            We added this to our website because it aligns with our 
            mission to help students improve their coding skills and 
            prepare for competitions!
          </Text>

        </Box>
      </Flex>
    </>
  );
}
