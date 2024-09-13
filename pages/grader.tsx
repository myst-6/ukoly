import { Box, Header } from "components";
import { useColorMode, Text, Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";

import { pages } from "content";
import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";

const langs = {
    python: "Python", 
    cpp: "C++",
}

const LanguageSelector = ({language, onSelect}: { language: keyof typeof langs, onSelect: (key: keyof typeof langs) => void }) => {
    return <Box display="flex" alignItems="center">
        <Text ml={2} fontSize="lg" padding="1%">Language: </Text>
        <Menu>
            <MenuButton as={Button}>{langs[language]}</MenuButton>
            <MenuList>
                {Object.entries(langs).map(([key, label]:any) => {
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

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  }

  return (
    <>
      <Header page={pages.grader} />
      <Box padding="2% 0% 3% 3%">
        <LanguageSelector language={language} onSelect={setLanguage}/>
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
