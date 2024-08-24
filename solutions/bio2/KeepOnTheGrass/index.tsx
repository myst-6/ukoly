import { Link, SCode, SCodeBlock, HStack, SText, STitle, Image } from "components";
import { brace, op } from "../../util";

export const KeepOnTheGrass = () => {
  return (
    <>
      <STitle>Observation 1</STitle>
      <SText>
        The pattern is symmetrical, so we can just solve
        the problem for positive $X$ and $Y$. Therefore,
        we can assume that $X, Y \geq 0$. Also, without
        loss of generality, we can assume that $X \geq Y$,
        because we can swap $X$ and $Y$ and the answer will
        still be the same.
      </SText>
      <STitle>Observation 2</STitle>
      <SText>
        The diagrams given in the problem statement are
        deliberately misleading, because they do not quite
        give enough squares to show how the pattern proceeds.
        However, by generating the next few "terms" of the
        pattern, we can see that the pattern is actually
        periodic - if we let $f(x, y)$ be the colour of
        the square at coordinates $(x, y)$, then we have
        $f(x, y) = f(x + 4n, y + 4m)$ for all integers $n, m$.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        Just generate the pattern for some large number
        of days, and then some observations can quickly
        be made about the shortest path to each point.
        Instead of considering the entire map, just consider
        the top-right quadrant. Then, generate the pattern for some large number
          of days, and some observations can quickly
          be made about the shortest path to each point.
      </SText>
      <HStack alignItems="flex-start">
        <Image src="/assets/images/keeponthegrass/keeponthegrass.png" height="16rem" padding="20px" alt="Sample Diagram" />
        <SText>
         
          Straight away, a clear observation can be made 
          about each dark (grassed) square on this diagram -
          each square is either located on a continuous 
          dark line (in which case, the answer
          is just $X+Y$), or it is located one square away 
          from such a line (in which case, the answer is
          $X+Y+1$). Since computing whether or not a square
          is on a dark line is somewhat challenging, we can 
          make some more observations to simplify the problem.
          One such observation is that if $X$ and $Y$ are
          both even, then the answer is double the answer for
          $f({brace("\\frac{X}{2}")}, {brace("\\frac{Y}{2}")})$.
          Another observation is that if $X$ and $Y$ are both odd,
          then the square is not grassed (white on the diagram),
          therefore you can return {<SCode>LLONG_MAX</SCode>}. Although this 
          isn't important in itself, it can be used to simplify
          the next step. Without loss of generality, let's assume
          $X$ is even and $Y$ is odd (otherwise, you can swap $X$
          and $Y$, then proceed in the same fashion), then the
          answer is the minimum of $f(X, Y-1)$ and $f(X, Y+1)$.
          This is because one of these squares is guaranteed
          to be grassed, and the other is guaranteed not to be, so 
          this returns the optimal answer. 
        </SText>
      </HStack>
      <STitle>Conclusion</STitle>
      <SText>
        Although ad-hoc tasks like this one can sometimes 
        be quite intimidating, they often have very simple 
        and elegant solutions. This problem is a good example
        of one such task, where generating a bigger version 
        of the pattern and making some observations
        can lead to a very short solution.
      </SText>
      <SCodeBlock path="keeponthegrass/sol" />
      <SText>
        Or otherwise, you can choose to be like Boris and code this... take your pick!!
      </SText>
      <SCodeBlock path="keeponthegrass/borissol" />
    </>
  );
};
