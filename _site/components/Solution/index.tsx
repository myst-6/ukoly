import { SText } from "../SText";
import { STitle } from "../STitle";
import { Box, type BoxProps } from "../Box";
import { Link } from "../Link";
import { ProblemInfo } from "content";

export interface SolutionProps extends BoxProps {
  problem: ProblemInfo;
}

export const Solution = ({ problem, children, ...props }: SolutionProps) => {
  return (
    <Box {...props}>
      <STitle>Source</STitle>
      <SText>
        The original problem statement can be found<Link href={problem.original}>here.</Link>
      </SText>
      {problem.component}
    </Box>
  );
}
