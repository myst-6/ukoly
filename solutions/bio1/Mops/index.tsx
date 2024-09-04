import { SCodeBlock, SText, STitle, SCode, SList } from "components";

export const Mops = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
       Let's first notice the small constraint on the maximum value of $n$.
       This suggests it is feasible to calculate the answer for all positive integers up to $n$, 
       and use these results to calculate the answer for $n$.
       We can do this by using bottom-up dynamic programming.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        Let's first initialise an array <SCode>moplen</SCode> storing the minimum mop length for any positive integer $i$.
        We can initialize the value of <SCode>moplen[0]</SCode> to $0$, as we need exactly $0$ $1$s to represent $0$.
        For each positive integer from $0$ to $n$, we can calculate the minimum possible mop length to be the minimum of the following:
      </SText>
      <SList>
        <SText><SCode>moplen[i-1] + 1</SCode>, as we can always get to the current number by adding $1$ to the previous number.</SText>
        <SText>
            <SCode>moplen[i//f] + moplen[f]</SCode>, where $f$ is a factor of $i$. 
            This is because we can achieve $i$ by multiplying $2$ of it's factors together. 
            The length of this mop is the sum of the lengths of the mops of the factors.
        </SText>
      </SList>
      <SText>Finally, we can output the mop length of the desired number, $n$.</SText>

      <STitle>Code</STitle>
      <SCodeBlock path="mops/sol"/>
    </>
  );
};
