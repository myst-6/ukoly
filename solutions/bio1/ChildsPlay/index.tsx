import { SCodeBlock, SText, STitle, SCode } from "components";
import { brace } from "solutions/util";

export const ChildsPlay = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Let's first notice the large constraint on $n$.
        This suggests it is infeasible to brute force the solution.
        Instead, we should use dynamic programming to directly generate the answer.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        First, let's define a function <SCode>combs</SCode> to calculate the number of ways to form a sum of $n$.
      </SText>
      <SText align="center">
        $f(0) = 0 \\ n {brace(" < ")} 0; f(n) = 0 \\ f(n) = {brace("\\sum_{i=1}^{9}")} f(n - i)$
      </SText>
      <SText>
        This is because the number of ways to form a total $n$ is the sum of the number of ways to form a total of $n - 1$, $n - 2$, ${brace("\\ldots")}$, $n - 9$,
        as at each step, we can add a number from $1$ to $9$ to the current solution. Only the answers which finish with a total of $0$ are valid. 
      </SText>
      <SText>
        To prevent duplicate work, we should memoize this function. This can be done using Python's <SCode>functools.lru_cache</SCode> decorator, 
        or using an <SCode>std::unordered_map</SCode>.
      </SText>
      <SText>
        Now we can use this function to find the next number in the answer.
        To do this, we can iterate through each possible next number in order. 
        We should find it's position in dictionary order by finding the number of combinations of the remaining sum and adding it to 
        the position of the last element. 
        When the position is greater than $n$, we have found the next number.
        We can now recursively build the answer until we reach $n$.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="childsplay/sol"/>
    </>
  );
};
