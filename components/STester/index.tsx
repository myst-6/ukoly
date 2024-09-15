import { useState } from "react";
import { Button, HStack, Text } from "components";
import { useTester, waiting } from "utils";
import { BIO1ProblemInfo, Language } from "content";

// Refactored STester to accept props
interface STesterProps {
  problem: BIO1ProblemInfo;
  code: string;
  language: Language;
}

export const STester = ({ problem, code, language }: STesterProps) => {
  const { dispatch, results } = useTester();

  const handleRunCode = () => {
    if (!problem.tests) {
      console.error("No tests for this problem.");
      return;
    }
    dispatch(problem.tests!, problem.checker!, code, language);
  };

  return (
    <HStack alignItems="center">
      <Button onClick={handleRunCode}>Submit Code</Button>
      <Text typography="body.medium">{
        results[0] === waiting ? "Waiting..." : `Points scored: ${results.reduce(
          (acc, result) => acc + (result.status === "AC" ? problem.tests![results!.indexOf(result)]!.points : 0), 0)}`
      }
      </Text>
    </HStack>
  );
};
