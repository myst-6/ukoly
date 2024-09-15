import { useState } from "react";
import { Button, HStack, Text } from "components";
import { useTester, ncmp } from "utils";
import { BIO1ProblemInfo, Language } from "content";

// Refactored STester to accept props
interface STesterProps {
  problem: BIO1ProblemInfo;
  code: string;
  language: Language;
}

export const STester = ({ problem, code, language }: STesterProps) => {
  const [points, setPoints] = useState(0);
  const { dispatch, results } = useTester();
  
  const handleRunCode = () => {
    if (!problem.tests) {
      console.error("No tests for this problem.");
      return;
    }

    // please fix the below code

    // ncmp is usually, but not always, the correct checker for a problem.
    setPoints(0);
    dispatch(problem.tests, ncmp, code, language);

    const zippedResults = problem.tests!.map((test, index) => ({
      test,
      result: results[index],
    }));

    for (const { test, result } of zippedResults) {
      if (result!.status === "AC") {
        setPoints(prevPoints => prevPoints + test.points);
      }
    }
  };

  return (
    <HStack alignItems="center">
      <Button onClick={handleRunCode}>Submit Code</Button>
      <Text typography="body.medium">{`${points} points scored`}</Text>
    </HStack>
  );
};
