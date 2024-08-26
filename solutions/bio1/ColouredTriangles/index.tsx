import { SCodeBlock, SText, STitle } from "components";
import { brace } from "solutions/util";

export const ColouredTriangles = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Let's first notice the small constraints of the problem. Since the number of rows is at most $10$, and in one iteration the length of each row will decrease by $1$, 
        we can simulate the process in $\mathcal{brace("O")}(n^2)$ time. 
      </SText>

      <STitle>Solution</STitle>
      <SText>
        We can iterate through the row. 
        For each pair of adjacent elements, we can check if they are the same. If they are, we can append the same element to the next row.
        Otherwise, we can append the remaining element to the next row.
        We can then repeat this process on the next row, until the length of the row is $1$.
        This is the output. 
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="colouredtriangles/sol"/>
    </>
  );
};
