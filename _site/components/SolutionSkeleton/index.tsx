import { Skeleton, type SkeletonProps } from "../Skeleton";
import { Spacer } from "../Spacer";
import { Text } from "../Text";

export interface SolutionSkeletonProps extends SkeletonProps {
  // nothing new yet
}

export const SolutionSkeleton = ({ ...props }: SolutionSkeletonProps) => {
  return (
    <>
      <Text typography="body.medium">
        When you select a problem, it will render down here!
      </Text>
      <Spacer m={2} />
      <Skeleton {...props} height="8em"></Skeleton>
    </>
  );
}
