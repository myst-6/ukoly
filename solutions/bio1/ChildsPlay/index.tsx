import { SCodeBlock, SText, STitle, SCode } from "components";

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
        Now we can use this function to find the next number in the answer.
        To do this, we can iterate through each number in dictionary order, and check if the number of combinations to form that total 
        is greater than $n$. If it is, we can add that number to the answer and subtract the number of combinations from $n$.
        Finally, when the goal reaches $0$, we have found the answer.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="childsplay/sol"/>
    </>
  );
};
