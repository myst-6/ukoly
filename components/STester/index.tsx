import { Button, HStack, SText, Text, Box, STitle, SCode } from "components";
import { Modal, ModalBody, ModalOverlay, ModalCloseButton, ModalContent, useDisclosure } from "@chakra-ui/react";
import { useTester, waiting } from "utils";
import { BIO1ProblemInfo, Language } from "content";
import { useEffect } from "react";

interface ResultModalProps {
  stat: string | undefined;
  message: string;
  isOpen: boolean;
  input: string | undefined;
  output: string | undefined;
  expected: string | undefined;
  onClose: () => void;
}

const ResultModal = ({stat, message, isOpen, onClose, input, output, expected}: ResultModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding={"1em"}>
          <ModalCloseButton />
          <ModalBody>
            <STitle>Verdict: {(stat) ?? "Error. Please contact Boris on Discord."}</STitle>
            <SText>Input: </SText>
            <SCode><pre>{input}</pre></SCode>
            <SText>Output: </SText>
            <SCode><pre>{output}</pre></SCode>
            <SText>Expected: </SText>
            <SCode><pre>{expected}</pre></SCode>
            <SText>Grader Out: {message}</SText>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

interface ResultButtonProps {
  stat: string | undefined;
  message: string | undefined;
  input: string | undefined;
  output: string | undefined;
  expected: string | undefined;
}

const ResultButton = ({ stat, message, input, output, expected }: ResultButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!message) {
    return (
      <Button>Waiting...</Button>
    )
  } 

  let color;
  switch (stat) {
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
    case "MLE":
      color = "orange";
      break;
    default:
      color = "gray";
      break;
  }
  return (
    <>
      <Button colorScheme={color} margin={"0.2em"} onClick={onOpen} width={"5vw"}>{stat}</Button>
      <ResultModal stat={stat} message={message} isOpen={isOpen} onClose={onClose} input={input} output={output} expected={expected}/>
    </>
  );
}

// Refactored STester to accept props
interface STesterProps {
  problem: BIO1ProblemInfo;
  code: string;
  language: Language;
}

export const STester = ({ problem, code, language }: STesterProps) => {
  const { dispatch, results, setProblem, problem: dispatchedProblem } = useTester(problem);

  useEffect(() => {
    setProblem(problem);
  }, [problem, setProblem]);

  const handleRunCode = () => {
    dispatch(code, language);
  };

  return (
    <>
      <HStack alignItems="center">
        <Button onClick={handleRunCode}>Submit Code</Button>
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
          results.map((_, idx) => {
            return (
              <>
                <ResultButton stat={results[idx]?.status} 
                              message={(results[idx]?.message == "Waiting") ?  "WJ" : results[idx]?.message} 
                              input={dispatchedProblem.tests![idx]?.input}
                              expected={dispatchedProblem.tests![idx]?.output}
                              output={"Boris\nPlease\nAdd\nOutputs"} // TODO: Add actual output here
                />
              </>
            )
          })
        }
      </Box>
    </>
  );
};
