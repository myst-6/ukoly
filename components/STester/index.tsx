import { Button, HStack, SText, Text, Box, STitle, SCode } from "components";
import { Modal, ModalBody, ModalOverlay, ModalCloseButton, ModalContent, useDisclosure, ButtonProps } from "@chakra-ui/react";
import { TestResult, useTester, waiting } from "utils";
import { BIO1ProblemInfo, Language, Test } from "content";
import { useEffect, useState } from "react";
import { useTurnstile } from "utils/invocation/turnstile";
import assert from "assert";

interface ResultModalProps {
  result: TestResult;
  test: Test;
  isOpen: boolean;
  onClose: () => void;
}

const ResultModal = ({ result, test, isOpen, onClose}: ResultModalProps) => {
  if (result.status === "PA") {
    assert(!!result.partial);
  }
  const points = result.status === "PA" ? result.partial! * test.points 
    : result.status === "AC" ? test.points 
      : 0;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding={"1em"}>
          <ModalCloseButton />
          <ModalBody>
            <STitle>Verdict: {result.status} ({`${points} / ${test.points}`})</STitle>
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

  let color: ButtonProps["colorScheme"];
  switch (result.status) {
    case "AC":
      color = "green";
      break;
    case "WA":
    case "RE":
    case "CE":
    case "RJ":
    case "PE":
      color = "red";
      break;
    case "TLE":
    case "MLE":
    case "PA":
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
  const [dispatched, setDispatched] = useState<boolean>(false);
  const { token, isVerified, error, reset, containerRef } = useTurnstile();

  useEffect(() => {
    setProblem(problem);
    setDispatched(false);
  }, [problem, setProblem]);

  const handleRunCode = () => {
    if (!isVerified || !token) {
      console.error("Turnstile verification required");
      return;
    }
    setDispatched(true);
    onBegin();
    dispatch(code, language, token);
    reset(); // Reset for next execution
  };

  useEffect(() => {
    if (results.every(result => result.status !== "TS")) {
      onEnd();
    }
  }, [results, onEnd]);

  return (
    <>
      {/* Invisible Turnstile widget */}
      <div ref={containerRef} style={{ display: 'none' }} />
      
      <HStack alignItems="center">
        {
          <Button 
          onClick={handleRunCode} 
          isLoading={results.some(result => result.status === "TS")}
          isDisabled={!isVerified || results.some(result => result.status === "TS")}
        >
          Submit Code
        </Button>
        }
        
        <Text typography="body.medium">
          {
            dispatched && results && results[0] && 
              (
                results[0] === waiting ? 
                  "Waiting..." : 
                  `Points scored: ${results.reduce(
                    (acc, result, index) => {
                      if (result.status === "PA") {
                        if (!result.partial) {
                          console.warn("Problem has PA verdict but no partial score assigned.");
                          return acc;
                        }
                        if (!dispatchedProblem.tests) return acc;
                        if (!dispatchedProblem.tests[index]) return acc;
                        return acc + result.partial * dispatchedProblem.tests[index].points;
                      } else if (result.status === "AC") {
                        if (!dispatchedProblem.tests) return acc;
                        if (!dispatchedProblem.tests[index]) return acc;
                        return acc + dispatchedProblem.tests[index].points;
                      } else {
                        return acc;
                      }
                    }, 0)} / ${dispatchedProblem.tests && dispatchedProblem.tests.reduce(
                    (acc, test) => {
                      return acc + test.points;
                    }, 0)}`
              )
          }
        </Text>
      </HStack>
      <Box height="100%" display={"inline-block"} marginTop={"1em"}>
        {
          dispatched && results && results[0] &&
            (
              results.map((result, idx) => {
                if (!dispatchedProblem.tests) return;
                if (!dispatchedProblem.tests[idx]) return;
                return (
                  <ResultButton 
                    key={idx} 
                    result={result}
                    test={dispatchedProblem.tests[idx]}
                  />
                )
              })
            )
        }
      </Box>
    </>
  );
};
