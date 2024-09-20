import { Button, HStack, SText, Text, Box, STitle, SCode } from "components";
import { Modal, ModalBody, ModalOverlay, ModalCloseButton, ModalContent, useDisclosure } from "@chakra-ui/react";
import { TestResult, useTester, waiting } from "utils";
import { BIO1ProblemInfo, Language, Test } from "content";
import { useEffect } from "react";

interface ResultModalProps {
  result: TestResult;
  test: Test;
  isOpen: boolean;
  onClose: () => void;
}

const ResultModal = ({ result, test, isOpen, onClose}: ResultModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding={"1em"}>
          <ModalCloseButton />
          <ModalBody>
            <STitle>Verdict: {result.status}</STitle>
            <SText>Input: </SText>
            <SCode><pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{test.input}</pre></SCode>
            <SText>Output: </SText>
            <SCode><pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{result.output || "(Empty)"}</pre></SCode>
            <SText>Expected: </SText>
            <SCode><pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{test.output || "(Empty)"}</pre></SCode>
            <SText>Checker Output: </SText>
            <SCode><pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{result.message || "(Empty)"}</pre></SCode>
            <SText>Execution Time / Memory Usage: </SText>
            <SCode><pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{result.time}ms / {result.memory}MB</pre></SCode>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

interface ResultButtonProps {
  result: TestResult;
  test: Test;
}

const ResultButton = ({ result, test }: ResultButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let color;
  switch (result.status) {
    case "AC":
      color = "green";
      break;
    case "WA":
    case "RE":
    case "CE":
    case "RJ":
      color = "red";
      break;
    case "TLE":
    // case "MLE":
      color = "orange";
      break;
    default:
      color = "gray";
      break;
  }
  return (
    <>
      <Button colorScheme={color} margin={"0.2em"} onClick={onOpen} width={"5vw"}>{result.status}</Button>
      <ResultModal result={result} test={test} isOpen={isOpen} onClose={onClose} />
    </>
  );
}

// Refactored STester to accept props
interface STesterProps {
  problem: BIO1ProblemInfo;
  code: string;
  language: Language;
  onBegin: () => void;
  onEnd: () => void;
}

export const STester = ({ onBegin, onEnd, problem, code, language }: STesterProps) => {
  const { dispatch, results, setProblem, problem: dispatchedProblem } = useTester(problem);

  useEffect(() => {
    setProblem(problem);
  }, [problem, setProblem]);

  const handleRunCode = () => {
    onBegin();
    dispatch(code, language);
  };

  useEffect(() => {
    if (results.every(result => result.status !== "TS" && result.status !== "WJ")) {
      onEnd();
    }
  }, [results, onEnd]);

  return (
    <>
      <HStack alignItems="center">
        {
          <Button 
          onClick={handleRunCode} 
          isLoading={results.some(result => result.status === "TS" || result.status === "WJ")}
        >
          Submit Code
        </Button>
        }
        
        <Text typography="body.medium">
          {
            results.length === dispatchedProblem.tests?.length &&
              results[0] === waiting ? "Waiting..." : `Points scored: ${results.reduce(
                (acc, result, index) => acc + (result.status === "AC" ? dispatchedProblem.tests![index]!.points : 0), 0)}`
          }
        </Text>
      </HStack>
      <Box height="100%" display={"inline-block"} marginTop={"1em"}>
        {
          results.length === dispatchedProblem.tests?.length &&
            results.map((result, idx) => {
              return (
                <ResultButton 
                  key={idx} 
                  result={result}
                  test={dispatchedProblem.tests![idx]!}
                />
              )
            })
        }
      </Box>
    </>
  );
};
