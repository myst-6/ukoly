import { Textarea, HStack, VStack, Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SourceCode, STitle } from "components";
import { useInvoker } from "utils";
import { languages } from "content";
import { useTurnstile } from "utils/invocation/turnstile";

export interface SRunnerProps {
  codes: SourceCode[];
}

export const SRunner = ({ codes }: SRunnerProps) => {
    const [testCase, setTestCase] = useState<string>("");
    const [output, setOutput] = useState<string>("");
    const [ran, setRan] = useState<boolean>(false);

    const { dispatch, result } = useInvoker();
    const { token, isVerified, reset, containerRef } = useTurnstile();
  
    const handleRunCode = () => {
      if (!isVerified || !token) {
        console.error("Turnstile verification required");
        return;
      }
      const idx = codes.findIndex((code: string | null) => code !== null);
      setRan(true);
      dispatch(testCase, codes[idx]!, languages[idx]!, token);
      reset(); // Reset for next execution
    };

    useEffect(() => {
      const { status, message } = result;
      if (!ran) {
        setOutput("");
      } else if (status === "TS") {
        setOutput("Waiting...");
      } else {
        setOutput(message);
      }
    }, [ran, result]);

    return <VStack width="100%">
      {/* Invisible Turnstile widget */}
      <div ref={containerRef} style={{ display: 'none' }} />
      
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
      <Button 
        colorScheme="teal" 
        size="md" 
        onClick={handleRunCode}
        isDisabled={!isVerified}
      >
        Run Code
      </Button>
    </Flex>
  </VStack>
}
