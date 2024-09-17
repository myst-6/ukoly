import { Button, HStack, SText, Text } from "components";
import { useTester, waiting } from "utils";
import { BIO1ProblemInfo, Language } from "content";
import { useEffect } from "react";

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
            results[0] === waiting ? "Waiting..." : `Points scored: ${results.reduce(
              (acc, result, index) => acc + (result.status === "AC" ? dispatchedProblem.tests![index]!.points : 0), 0)}`
          }
        </Text>
      </HStack>
      {
        results.map((_, idx) => {
          return (
            <SText key={idx}>{`Test ${idx + 1}: ${results[idx]?.status} (${results[idx]?.message})` ?? "Waiting..."}</SText>
          )
        })
      }
    </>
  );
};
