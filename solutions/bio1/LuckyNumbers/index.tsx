import { SCodeBlock, SText, STitle } from "components";

export const LuckyNumbers = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Let's first notice the small constraint on $n$. 
        This suggests it will be sufficient to use a brute force algorithm to generate all lucky numbers up to $10000$.
      </SText>

      <STitle>Solution 1</STitle>
      <SText>
        We can generate all lucky numbers up to $10000$ by simply following the problem statement.
        We should note that when we remove the $i$-th number, all the numbers will shift back $1$ position.
      </SText>

      <SText>
        We can then iterate until we reach a number greater than $n$, and output it, and the number before it (assuming this number is less than $n$).
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="luckynumbers/sol1"/>

      <STitle>Solution 2</STitle>
      <SText>
        However, we can notice that the list of lucky numbers is sorted.
        This suggests we can use binary search to find the answer.
      </SText>
      <SCodeBlock path="luckynumbers/sol2"/>

      <SText>
        Please note that it is also possible to pre-compute the array of lucky numbers.
      </SText>
    </>
  );
};
