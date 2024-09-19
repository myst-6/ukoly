import { Box, Header, HStack, VStack } from "components";
import { useColorMode, Tab, Tabs, TabPanels, TabPanel, TabList } from "@chakra-ui/react";
import { BIO1ProblemInfo, bio1Problems, languages } from "content";
import { pages } from "content";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { PDFViewer, SSelector, STester, SRunner } from "components";
import { useDimensions, useWindowDimensions } from "utils";
import { editor } from "monaco-editor";

export default function Grader() {
  const { colorMode } = useColorMode();
  
  const years = [...new Set(bio1Problems.map(problem => problem.year))].sort((a, b) => b - a);

  const [language, setLanguage] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [value, setValue] = useState(languages[language]!.template);
  const [question, setQuestion] = useState<number>(0); // 0-indexed

  const makeURL = (year: number) => {
    if (year == 2000) 
      return "https://www.olympiad.org.uk/papers/2000/bio/bio2kex.pdf";
    if (year <= 2004) 
      return `https://www.olympiad.org.uk/papers/${year}/bio/bio${String(year).slice(2)}ex.pdf`;
    if (year == 2007) 
      return "https://www.olympiad.org.uk/papers/2007/bio/bio07exam.pdf";
    if (year == 2010) 
      return "https://www.olympiad.org.uk/papers/2010/bio/bio-10-exam.pdf";
    if (year == 2011) 
      return "https://www.olympiad.org.uk/papers/2011/bio/bio2011-Round1-Exam.pdf";
    return `https://www.olympiad.org.uk/papers/${year}/bio/bio${String(year).slice(2)}-exam.pdf`;
  }

  const currProb = bio1Problems.find((problem: BIO1ProblemInfo) => problem.year === years[year] && problem.question == question + 1)!;

  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const { ref: sideRef, dimensions } = useDimensions<HTMLDivElement>();
  const { dimensions: windowDimensions } = useWindowDimensions();

  useEffect(() => {
    console.log("dimensions changed", dimensions);
    if (editorRef.current !== null) {
      // resize from nothing
      editorRef.current.layout({ height: 0, width: 0 });
    }
  }, [dimensions, windowDimensions]);

  return (
    <VStack
        height="100%"
        gap={0}
      >
      <Header page={pages.grader} />
      <HStack
        px={5}
        py={2} 
        justifyContent="space-between" 
        flex={1}
        height="100%"
        width="100%"
        gap="3em"
      >
        <Box flex={4} height="100%">
          <PDFViewer url={makeURL(years[year]!)} />
        </Box>
        <VStack flex={5} height="100%" ref={sideRef}>
          <VStack flex={1} width="100%">
            <HStack
              pb={1}
              justifyContent="space-between"
            >
              <SSelector
                name="Language"
                opts={languages.map(language => language.display)}
                opt={language}
                onSelect={(opt: number) => {
                  if (editorRef.current === null) return;
                  setLanguage(opt);
                  const lang = languages[opt]!;
                  const ed = editorRef.current;
                  if (
                    languages.some(lang => ed.getValue() === lang.template) ||
                    ed.getValue().trim() === ""
                  ) {
                    setValue(lang.template);
                    ed.setValue(lang.template);
                    ed.setPosition(lang.initPos);
                    ed.focus();
                  }
                }}
              />
              <HStack>
                <SSelector
                  name="Year"
                  opts={years.map(String)}
                  opt={year}
                  onSelect={setYear}
                />
                <SSelector
                  name="Question"
                  opts={bio1Problems
                    .filter((problem: BIO1ProblemInfo) => problem.year === years[year])
                    .sort((a, b) => a.question - b.question)
                    .map(problem => `${problem.question}. ${problem.display}`)}
                  opt={question}
                  onSelect={setQuestion}
                />
              </HStack>
            </HStack>
            <Box flex={1} width="100%">
              <Editor
                height="100%"
                width="100%"
                theme={`vs-${colorMode}`}
                language={languages[language]!.monaco}
                defaultValue=""
                onMount={editor => {
                  const lang = languages[language]!;
                  editorRef.current = editor;
                  editor.setPosition(lang.initPos);
                  editor.focus();
                }}
                value={value}
                onChange={value => setValue(value || "")}
              />
            </Box>
          </VStack>
          <Tabs>
            <TabList>
              <Tab>Run</Tab>
              <Tab>Submit</Tab>
            </TabList>

            <TabPanels height="25vh" width="100%">
              <TabPanel width="50vw" marginTop="-1em">
                <SRunner
                  codes={languages.map((_, index) => (index === language ? value : null))}
                />
              </TabPanel>
              <TabPanel width="50vw">
                <STester
                  problem={currProb}
                  code={value}
                  language={languages[language]!}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </HStack>
    </VStack>
  );
}
