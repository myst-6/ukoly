import {
  Textarea,
  HStack,
  VStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { STitle } from "components";
import { useRunner } from "utils";
  

export interface Language {
  display: string;
  extension: string;
  highlight: string;
  pistonName: string;
  monaco: string;
  version: string;
  template: string;
  initPos: { lineNumber: number, column: number };
}

export const languages: Language[] = [
  {
    display: "C++",
    extension: "cpp",
    highlight: "cpp",
    pistonName: "c++",
    monaco: "cpp",
    version: "10.2.0",
    template: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Enter your solution below. 
    // Use std::cin and std::cout for I/O, and do not 
    // output any prompts, because the grader will not work.
    
    
    
    return 0;
}`,
    initPos: { lineNumber: 9, column: 5 }
  },
  {
    display: "Python",
    extension: "py",
    highlight: "python",
    pistonName: "python",
    monaco: "python",
    version: "3.10",
    template: `# Enter your solution below. Use input() 
# and print() for I/O, and do not output
# any prompts, because the grader will not work.

`,
    initPos: { lineNumber: 5, column: 1 }
  },
];

export type TestCase = null | string;
export type Output = null | string;

export const SRunner = ({codes}:any) => {
    const [testCase, setTestCase] = useState<TestCase>("");
    const [output, setOutput] = useState<Output>(null);


    const { dispatch, results } = useRunner();
  
    const handleRunCode = () => {
      const idx = codes.findIndex((code: string | null) => code !== null);
      dispatch([testCase ?? ""], codes[idx]!, languages[idx]!);
    };

    useEffect(() => {
      if (results.length === 0) return;
      const { status, message } = results[0]!;
      if (status === "TS") {
        setOutput("Waiting...");
      } else {
        setOutput(message);
      }
    }, [results]);

    return <>
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
  </>
}
