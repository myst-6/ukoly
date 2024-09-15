import {
  Textarea,
  HStack,
  VStack,
  Button,
  Flex
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SourceCode, STitle } from "components";
import { useRunner } from "utils";
import { languages } from "content";

export interface SRunnerProps {
  codes: SourceCode[];
}

export const SRunner = ({ codes }: SRunnerProps) => {
    const [testCase, setTestCase] = useState<string>("");
    const [output, setOutput] = useState<string>("");

    const { dispatch, results } = useRunner();
  
    const handleRunCode = () => {
      const idx = codes.findIndex((code: string | null) => code !== null);
      dispatch([ testCase ], codes[idx]!, languages[idx]!);
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

    return <VStack width="100%">
      <HStack justifyContent="center" alignItems="center" width="100%">
      <VStack flex="1" spacing={4}>
        <STitle size="sm">Input</STitle>
        <Textarea
          placeholder="Enter a test case: "
          size="md"
          width="100%"
          value={testCase}
          onChange={ev => setTestCase(ev.target.value)}
        />
      </VStack>
      <VStack flex="1" spacing={4}>
        <STitle size="sm">Output</STitle>
        <Textarea
          placeholder="Output will appear here"
          size="md"
          width="100%"
          value={output}
          isReadOnly
        />
      </VStack>
    </HStack>
    <Flex justifyContent="center" width="100%" mt={2}>
      <Button colorScheme="teal" size="md" onClick={handleRunCode}>
        Run Code
      </Button>
    </Flex>
  </VStack>
}
