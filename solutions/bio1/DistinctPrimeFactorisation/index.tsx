import { SCodeBlock, SText, STitle, SCode } from "components";

export const DistinctPrimeFactorisation = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Since $n$ is small, we can actually just brute force 
        all numbers from $1$ to $n$ and check if they are factors 
        of $n$. First, set <SCode>answer=1</SCode>. Now, for each 
        number from $1$ to $n$, if the number is a factor of $n$, 
        we can first multiply <SCode>answer</SCode> by the number,
        then divide $n$ by the number until it is no longer a factor
        of $n$.
      </SText>
      <SText>
        Of course, this seems far too simple to be correct. However,
        here is a proof:
      </SText>
      <SText>
        After the $i$-th iteration, $n$ is no longer divisible by
        any number $d$ such that $2 \leq d \lt i$. 
      </SText>
      <SText>
        Therefore, if $n$ is divisible by $i$ at the start 
        of the $i$-th iteration, $i$ cannot be divisible by any
        number $d$ such that $2 \leq d \lt i$, otherwise $n$ would 
        also be divisible by $d$, which is a contradiction, so $i$
        must be prime.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="distinctprimefactorisation/sol"/>
    </>
  );
};
