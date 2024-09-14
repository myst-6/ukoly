import { Box, Header, HStack } from "components";
import { useColorMode, Text, Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";

import { pages } from "content";
import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";

const langs = {
    python: "Python", 
    cpp: "C++",
}
const years = Array.from({ length: 25 }, (_, i) => 2000 + i).reduce((acc, year) => {
    acc[year] = year;
    return acc;
}, {} as Record<number, number>);

const questions = {
    q1: "1",
    q2: "2",
    q3: "3"
}

const Selector = ({name, opts, opt, onSelect}: any) => {
    return <Box display="flex" alignItems="center">
        <Text ml={2} fontSize="lg" padding="1%">{name}: </Text>
        <Menu>
            <MenuButton as={Button}>{opts[opt]}</MenuButton>
            <MenuList maxHeight="20vh" overflowY="auto">
                {Object.entries(opts).map(([key, label]:any) => {
                    return <MenuItem key={key} onClick={()=>onSelect(key)}>{label}</MenuItem>
                })}
            </MenuList>
        </Menu>
    </Box>
}

export default function grader() {
  const editorRef = useRef();
  const {colorMode} = useColorMode();


  const [value, setValue] = useState('');
  const [language, setLanguage] = useState<keyof typeof langs>('python')
  const [year, setYear] = useState<keyof typeof years>(2024)
  const [q, setq] = useState<keyof typeof questions>("q1")


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
            <Selector name={"Question"} opts={questions} opt={q} onSelect={setq}/>
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
