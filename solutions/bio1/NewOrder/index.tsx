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
        As for each character, we can either use a $1$ or a $0$. 
        To prevent duplicate calls to this function, we should memoize the result. 
        We can do this by using Python's <SCode>functools.lru_cache</SCode> or a or a $2$-dimensional array.
      </SText>
      <SText>
        Next, we can find the length of the answer. 
        We can do this by iterating through lengths, and keeping track of the number of ways to make a solution with length less than or equal to the current length.
        The first length such that the combinations is greater than or equal to $n$ will be the length of the answer. 
      </SText>
      <SText>
        Finally, we should recursively build the answer.
        To do this, we can observe that in dictionary order, a solution with a $0$ as the next digit will always be before a solution with $1$ as the next digit. 
        Using this, we can check if the number of combinations produced by adding a $0$ as the next digit is greater than $n$. 
        If it is, we know the next digit is a $0$. Otherwise, the next digit is a $1$. 
        We can now recursively solve for the rest of the answer. 
        We should note that the first digit must be a $1$, as leading $0$s are not allowed.
        We should also consider the edge case when $m = 0$, where the only solution is $0$.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="neworder/sol"/>
    </>
  );
};
