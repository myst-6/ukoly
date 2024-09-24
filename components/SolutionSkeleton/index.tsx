import { type SkeletonProps } from "../Skeleton";
import { Text } from "../Text";

export interface SolutionSkeletonProps extends SkeletonProps {
  // nothing new yet
}

export const SolutionSkeleton = ({ ...props }: SolutionSkeletonProps) => {
  return (
    <>
      <Text typography="body.medium" {...props}>
        When you select a problem, it will render here!
      </Text>
    </>
  );
}
