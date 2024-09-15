import { Box, Header, HStack } from "components";
import { useColorMode, VStack } from "@chakra-ui/react";
import { BIO1ProblemInfo, bio1Problems, languages } from "content";
import { pages } from "content";
import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { PDFViewer, SSelector, STester, SRunner } from "components";

export default function Grader() {
  const editorRef = useRef<any>();
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

  return (
    <>
      <Header page={pages.grader} />
      <HStack justifyContent="space-between">
        <Box padding="1em" pr="0">
          <PDFViewer url={makeURL(years[year]!)} />
        </Box>
        <VStack>
          <Box padding="1em">
            <HStack
              pb="1%"
              justifyContent="space-between"
              width="50vw"
            >
              <SSelector
                name="Language"
                opts={languages.map(language => language.display)}
                opt={language}
                onSelect={(opt: number) => {
                  setLanguage(opt);
                  const lang = languages[opt]!;
                  const ed = editorRef.current;
                  if (
                    languages.some((lang) => ed.getValue() === lang.template) ||
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
                    .map(problem => `${problem.question}. ${problem.display}`)}
                  opt={question}
                  onSelect={setQuestion}
                />
              </HStack>
            </HStack>
            <Editor
              height="55vh"
              width="50vw"
              theme={`vs-${colorMode}`}
              language={languages[language]!.monaco}
              defaultValue=""
              onMount={(editor) => {
                const lang = languages[language]!;
                editorRef.current = editor;
                editor.setPosition(lang.initPos);
                editor.focus();
              }}
              value={value}
              onChange={value => setValue(value || "")}
            />
          </Box>
          <STester
            problem={currProb}
            code={value}
            language={languages[language]!}
          />
          <SRunner
            codes={languages.map((_, index) => (index === language ? value : null))}
          />
        </VStack>
      </HStack>
    </>
  );
}
