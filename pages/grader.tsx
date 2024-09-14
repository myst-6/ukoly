import { Box, Header, HStack, languages } from "components";
import { useColorMode, Text, Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { BIO1ProblemInfo, bio1Problems } from "content";
import { pages } from "content";
import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { PDFViewer, SSelector } from "components";

const years = bio1Problems.reduce((acc: Record<number, number>, problem) => {
  acc[problem.year] = problem.year;
  return acc;
}, {} as Record<number, number>);

export default function grader() {
  const editorRef = useRef<any>();
  const { colorMode } = useColorMode();


  const [language, setLanguage] = useState<number>(0);
  const [year, setYear] = useState<number>(2024)
  const [value, setValue] = useState(languages[language]!.template);
  const [q, setq] = useState<number>(1)

  const makeURL = (year: any) => {
    if (year == 2000) return "https://www.olympiad.org.uk/papers/2000/bio/bio2kex.pdf";
    if (year <= 2004) return `https://www.olympiad.org.uk/papers/${year}/bio/bio${String(year).slice(2)}ex.pdf`;
    if (year == 2007) return "https://www.olympiad.org.uk/papers/2007/bio/bio07exam.pdf";
    if (year == 2010) return "https://www.olympiad.org.uk/papers/2010/bio/bio-10-exam.pdf";
    if (year == 2011) return "https://www.olympiad.org.uk/papers/2011/bio/bio2011-Round1-Exam.pdf";
    return `https://www.olympiad.org.uk/papers/${year}/bio/bio${String(year).slice(2)}-exam.pdf`;
  }

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editorRef.current.focus();
  }

  return (
    <>
      <Header page={pages.grader} />
      <HStack justifyContent="space-between">
        <Box padding="1em" paddingRight="0">
          <PDFViewer url={makeURL(year)} />
        </Box>
        <Box padding="1em">
          <HStack paddingBottom="1%" justifyContent="space-between" width="50vw">
            <SSelector name={"Language"} opts={
              Object.entries(languages).reduce((acc: Record<string, string>, [key, value]) => {
                acc[key] = value.display;
                return acc;
              }, {} as Record<string, string>)
            } opt={language} onSelect={
              (key: string) => {
                setLanguage(+key);
                const lang = languages[+key]!;
                const ed = editorRef.current;
                console.log(lang.initPos);
                if (Object.values(languages).some(lang => ed.getValue() === lang.template) || ed.getValue().trim() === '') {
                  setValue(lang.template);
                  ed.setValue(lang.template);
                  ed.setPosition(lang.initPos);
                  ed.focus();
                }
              }
            } />
          </HStack>
          <HStack>
            <SSelector name={"Year"} opts={years} opt={year} onSelect={setYear} />
            <SSelector name={"Question"} opts={
              bio1Problems.filter((problem: BIO1ProblemInfo) => problem.year == year) // implicit type conversion, I hate javascript!
                .reduce((acc: Record<number, string>, problem) => {
                  acc[problem.question] = `${problem.question}. ${problem.display}`;
                  return acc;
                }, {} as Record<number, string>)
            } opt={q} onSelect={setq} />
          </HStack>
          <Editor
            height="80vh"
            width="50vw"
            theme={`vs-${colorMode}`}
            language={languages[language]!.monaco!}
            defaultValue=""
            onMount={(editor) => {
              const lang = languages[language]!;
              onMount(editor);
              editor.setPosition(lang.initPos);
              editor.focus();
            }}
            value={value}
            onChange={(value = '', event) => setValue(value)}
          />
        </Box >
      </HStack >
    </>
  );
}
