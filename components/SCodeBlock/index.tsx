import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Tab, TabList, TabPanel, TabPanels, Tabs, Textarea,
  HStack,
  VStack,
  Button,
  Flex,
  Box
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CodeBlock } from "./CodeBlock";
import { STitle } from "components";

export const base: string = "/assets/code/";

export interface Language {
  display: string;
  extension: string;
  highlight: string;
  pistonName: string;
  version: string;
}

/*

See here for a list of highlights:
https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_HLJS.MD

*/

export const languages: Language[] = [
  {
    display: "C++",
    extension: "cpp",
    highlight: "cpp",
    pistonName: "c++",
    version: "10.2.0"
  },
  {
    display: "Python",
    extension: "py",
    highlight: "python",
    pistonName: "python",
    version: "3.10"
  }
];

export type SourceCode = null | string;
export type TestCase = null | string;
export type Output = null | string;

export interface SCodeBlockProps {
  path: string;
}

export const SCodeBlock = ({ path }: SCodeBlockProps) => {
  const [codes, setCodes] = useState<SourceCode[]>(languages.map(() => null));
  const [testCase, setTestCase] = useState<TestCase>("");
  const [output, setOutput] = useState<Output>(null);

  useEffect(() => {
    async function getCode(ext: string): Promise<SourceCode> {
      try {
        const res = await fetch(`${base}${path}.${ext}`);
        if (res.status === 404) {
          // file with this extension not found, no problem!
          return null;
        } else {
          return res.text();
        }
      } catch (error) {
        // some severe error
        console.error("Sorry, there was an error fetching the solution.");
        console.error("Please report this to Boris on discord.");
        console.error(error);
        return null;
      }
    }
    (async () => {
      const codes = await Promise.all(languages.map(({ extension }) => getCode(extension)));
      setCodes(codes);
    })();
  }, [path]);
  const handleRunCode = () => {
    setOutput("Waiting...");
    const idx = codes.findIndex(code => code !== null);
    fetch("https://emkc.org/api/v2/piston/execute",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: languages[idx]!.pistonName, // specify the language
          files: [{"name": "sol." + languages[idx]!.extension, "content": codes[idx]}], // specify the code to execute
          stdin: testCase, // specify the input
          version: languages[idx]!.version,
        }),
      }
    ).then(res => {
      if (!res.ok) {
        console.error(res);
        throw new Error("Network error");
      }
      return res.json();
    }).then(data => {
      if (data.run.stderr) {  
        setOutput(data.run.stderr);
        return;
      }
      setOutput(data.run.stdout);
    }).catch(err => {
      console.error(err);
      setOutput("Grader error. Please report this to Boris on discord.");
    });
  };

  return (
    <>
      <Accordion defaultIndex={[1]} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Click to see code:
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Tabs isFitted defaultIndex={0} variant="line">
              <TabList mb={1}>
                {
                  ...languages.filter((_, idx) => codes[idx] !== null).map(({ display, extension }) => {
                    return <Tab key={extension}>{display}</Tab>
                  })
                }
              </TabList>
              <TabPanels>
                {
                  ...Object.entries(codes).filter(([_, code]) => code !== null).map(([idx, code]) => {
                    return (
                      <TabPanel key={+idx}>
                        <CodeBlock
                          theme={atomOneDark}
                          code={code!}
                          language={languages[+idx]!.highlight}
                        />
                      </TabPanel>
                    )
                  })
                }
              </TabPanels>
            </Tabs>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              Click to test on custom inputs:
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <HStack justifyContent="center" alignItems="center" width="100%">
              <VStack flex="1" spacing={4}>
                <STitle size="sm">Input</STitle>
                <Textarea
                  placeholder="Enter a test case: "
                  size="md"
                  width="100%"
                  value={testCase ?? ""}
                  onChange={(e) => setTestCase(e.target.value)}
                />
              </VStack>
              <VStack flex="1" spacing={4}>

                <STitle size="sm">Output</STitle>
                <Textarea
                  placeholder="Output will appear here"
                  size="md"
                  width="100%"
                  isReadOnly
                  value={output ?? ""}
                />
              </VStack>
            </HStack>
            <Flex justifyContent="center" width="100%" marginTop="15px">
              <Button colorScheme="teal" size="md" onClick={handleRunCode}>
                Run Code
              </Button>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}