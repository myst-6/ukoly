import { Code } from "@chakra-ui/react";
import { SCode, SText, STitle } from "components";
import { brace } from "solutions/util";

export const Carve = () => {
  return (
    <>
      <STitle>Abridged Statement</STitle>
      <SText>
        You are given an $r$ by $c$ matrix of numbers. In one operation, you can remove
        either the top/bottom row or the left/right column, as long as the sum of numbers
        in that region is no greater than $m$. Output the minimum number of operations to
        make the matrix empty.
      </SText>

      <STitle>Observation</STitle>
      <SText>
        Minimising the number of operations is the same as maximising the size of
        the piece at the end before the last operation. If the area of the piece is $x$, 
        the answer would be $r + c - x$, because on each operation we remove exactly one row or column.
      </SText>

      <STitle>Sample Explanation</STitle>
      <SText>
        On the first operation, we can remove the top row since $1 + 2 + 3 = 6 \le 9$.
        On the second operation, we can remove the right column since $3 + 6 = 9 \le 9$.
        On the third operation, we can remove the bottom row since $1 + 4 = 5 \le 9$.
        We are left with a single row $[4, 5]$ and since $4 + 5 \le 9$ we can end here.
        The total number of operations used is $3 + 3 - 2 = 4$. 
      </SText>

      <STitle>Idea</STitle>
      <SText>
        Greedily taking slices off does not work on its own.
        If we want some sort of greedy algorithm to work, we should impose some additional restriction
        and use the greedy algorithm to solve a subproblem which we can use to build the answer.
        Let's consider the two cases where we are left with a single row or column separately.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        Let's consider the case where we are left with a single row, and we want to maximise the length
        of the row. Let's run a greedy algorithm where we prioritise removing the top and bottom rows, but
        in the case where this isn't possible, how do we prioritise removing the left or the right
        column?
      </SText>
      <SText>
        Let's introduce an additional paremeter $X$. Up until the point where we've taken
        less than $X$ columns off of the left edge, we should prioritise the left edge. After this, we
        should take no more columns off of the last edge. At the end of the process, if exactly $X$ operations
        have taken place then the algorithm will return the minimum right edge of the row given that the left 
        edge is at position $X$ (if not, the left edge is never $X$ in an optimal solution and we can ignore 
        this result). Therefore, if we can run the algorithm for all values of $0 \le X &lt; c$, this can give 
        us the answer for the maximum row length we can be left with.
      </SText>
      <SText>
        To run the greedy algorithm, we can first precalculate prefix sums and then it's easy to
        make it work in $\mathcal{brace("O")}(r + c)$ time. Therefore, we can run this algorithm for 
        all $0 \le X &lt; c$ in $\mathcal{brace("O")}(c \cdot (r + c))$ time.
      </SText>
      <SText>
        We can repeat this exact same idea for finding the maximum length of the column and choose
        the best answer from both processes. In total, the time complexity is
        $\mathcal{brace("O")}((r + c)^2)$.
      </SText>

      <STitle>Memory</STitle>
      <SText>
        There's just one more consideration. Unfortunately, the memory limit for this problem
        is so low that you cannot store the prefix sums for all the rows and cols. Firstly, instead
        of storing prefix sums for both the rows and columns, we need to store a 2D prefix sum of
        the entire grid. Secondly, an <Code>int</Code> data type will overflow but
        a <Code>long long</Code> data type is too large and will use too much memory. 
        Therefore, you need to use an <Code>unsigned int</Code> for this problem. It's strange, but it works.
      </SText>

      <STitle>Code</STitle>
      <SCode path="carve/sol.cpp" />
    </>
  );
};
