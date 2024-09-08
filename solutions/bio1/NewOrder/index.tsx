import { SCodeBlock, SText, STitle, SCode } from "components";

export const NewOrder = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Let's first notice the large constraint on $n$. 
        It is unfeasible to generate all the numbers up to the $n$-th number, as this will be too slow.
        Instead, we should use dynamic programming to directly generate the answer.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        Let's first define a function <SCode>combs</SCode>, that returns the number of combinations with $o$ ones, of length $l$.
        This can be defined as:
      </SText>
      <SText align={"center"}>
        $f(o, l) = f(o, l-1) + f(o-1, l-1) \\ f(0, 0) = 1$
      </SText>
      <SText>
        Next, we can find the length of the answer. 
        We can do this by iterating through lengths, and checking if the number of combinations with $o$ ones, of length at most $l$ is greater than $n$.
        Finally, to build the answer, we can check if the next number should be a $1$ or a $0$, by checking the interval $n$ lies in. 
        We should note that the first digit must be a $1$, as leading $0$s are not allowed.
        We should also consider the edge case when $m = 0$, where the only solution is $0$.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="neworder/sol"/>
    </>
  );
};
