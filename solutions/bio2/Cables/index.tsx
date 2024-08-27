import { SCode, SCodeBlock, SText, STitle } from "components";
import { brace } from "solutions/util";

export const Cables = () => {
  return (
    <>
      <STitle>Abridged Statement</STitle>
      <SText>
        You are given $s \cdot l$ points on a Cartesian plane.
        You need to group the points into $l$ groups of $s$ points each,
        and then connect the points in each group with cables 
        such that a loop is formed. These loops must not self-intersect, 
        or intersect with each other. You may output any valid configuration.
        
      </SText>

      <STitle>Observation</STitle>
      <SText>
        The sample suggests that some sort of convex hull
        algorithm must be used. However, the sample output 
        is misleading! Can you find a much simpler 
        solution that works for all cases?
      </SText>

      <STitle>Idea</STitle>
      <SText>
        Can you sort the points in some way to ensure that they can 
        form non-intersecting loops?
      </SText>

      <STitle>Solution</STitle>
      <SText>
        Sort the points by their $x$-coordinate, and then by their $y$-coordinate.
        Now, by grouping the points in order, you can ensure that the loops do not intersect.
        Proof: Suppose that two loops intersect. Then, there must be a point in the left 
        loop that is to the right of a point in the right loop, or they must be on the same vertical line,
        and the point in the left loop must be above the point in the right loop. However, this is impossible, 
        as the points are sorted by $x$-coordinate first, and then by $y$-coordinate.
      </SText>
      <SText>
        Once you have sorted the points, you can output the points in each loop.
        However, you must be careful to output the points in the correct order,
        as a loop must be formed. To do this, you can pick the bottom-left-most point 
        in each group and output the points in anticlockwise order. To do this,
        you can sort the points in each group by their angle with respect to the
        bottom-left-most point, which is equal to $\arctan(\frac{brace("y - y_0")}{brace("x - x_0")})$.
        Make sure to use the C++ function <SCode>atan2(y, x)</SCode> to handle
        the case where $x$ and/or $y$ are negative.
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="cables/sol" />
    </>
  );
};
