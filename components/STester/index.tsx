import { useEffect, useState } from "react";
import { Button, HStack, SText } from "components";
import { useTester, ncmp } from "utils";
import { Output, BIO1ProblemInfo, Language } from "content";

// Refactored STester to accept props
interface STesterProps {
  problem: BIO1ProblemInfo;
  code: string;
  language: Language;
}

export const STester = ({ problem, code, language }: STesterProps) => {
  const [output, setOutput] = useState<Output>(null);
  const [points, setPoints] = useState(0);
  const { dispatch, results } = useTester(problem.tests!, ncmp);
  const handleRunCode = () => {
    setPoints(0);
    dispatch(code, language);

    const acCount = results.filter(result => result.status === "AC").length;
    setPoints(prevPoints => prevPoints + acCount);
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

  return (
    <>
      <HStack>
        <Button onClick={handleRunCode}>Submit Code</Button>
        <SText>{`${points} points scored`}</SText>
      </HStack>
    </>
  );
};
