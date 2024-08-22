import { Box, type BoxProps } from "../Box";
import { Link } from "../Link";
import { Text } from "../Text";
import { ProblemInfo } from "content";

export interface SolutionProps extends BoxProps {
  problem: ProblemInfo;
}

export const Solution = ({ problem, children, ...props }: SolutionProps) => {
  return (
    <Box {...props}>
      <Text typography="title.large">Source</Text>
      <Text typography="body.medium">
        The original problem statement can be found <Link href={problem.original} color="blue">here</Link>.
      </Text>
      {problem.component}
    </Box>
  );
}
