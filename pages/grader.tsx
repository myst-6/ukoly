import { Box, Header, HStack } from "components";
import { useColorMode, Text, Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { BIO1ProblemInfo, bio1Problems } from "content";
import { pages } from "content";
import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";

const years = bio1Problems.reduce((acc: Record<number, number>, problem) => {
  acc[problem.year] = problem.year;
  return acc;
}, {} as Record<number, number>);

const langs = {
  python: "Python",
  cpp: "C++",
}

const Selector = ({ name, opts, opt, onSelect }: any) => {
  return <Box display="flex" alignItems="center">
    <Text ml={2} fontSize="lg" padding="1%">{name}: </Text>
    <Menu>
      <MenuButton as={Button}>{opts[opt]}</MenuButton>
      <MenuList maxHeight="20vh" overflowY="auto">
        {Object.entries(opts).map(([key, label]: any) => {
          return <MenuItem key={key} onClick={() => onSelect(key)}>{label}</MenuItem>
        })}
      </MenuList>
    </Menu>
  </Box>
}

export default function grader() {
  const editorRef = useRef();
  const { colorMode } = useColorMode();


  const [value, setValue] = useState('');
  const [language, setLanguage] = useState<keyof typeof langs>('python')
  const [year, setYear] = useState<keyof typeof years>(2024)
  const [q, setq] = useState<number>(0)


  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  }

  return (
    <>
      <Header page={pages.grader} />
      <Box padding="2% 0% 3% 3%">
        <HStack paddingBottom="1%" justifyContent="space-between" width="50vw">
          <Selector name={"Language"} opts={langs} opt={language} onSelect={setLanguage}/>
          <HStack>
            <Selector name={"Year"} opts={years} opt={year} onSelect={setYear}/>
            <Selector name={"Question"} opts={
              bio1Problems.filter((problem: BIO1ProblemInfo) => problem.year == year) // implicit type conversion, I hate javascript!
              .reduce((acc: Record<number, string>, problem) => {
                acc[problem.question] = `${problem.question}. ${problem.display}`;
                return acc;
              }, {} as Record<number, string>)
            } opt={q} onSelect={setq}/>
          </HStack>
        </HStack>
        <Editor
            height="80vh"
            width="50vw"
            theme={`vs-${colorMode}`}
            language={language}
            defaultValue=""
            onMount={onMount}
            value={value}
            onChange={(value='', event) => setValue(value)}
        />
      </Box>
    </>
  );
}
