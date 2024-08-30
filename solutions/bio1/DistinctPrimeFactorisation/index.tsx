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
        Let $p$ be a prime factor of $n$. Once we have removed 
        all multiples of $p$ from $n$, we will never encounter
        $p$, or a lower prime, again. This is because if we did,
        it would mean we had not removed all multiples of $p$ from
        $n$. Therefore, we can be sure that if we are processing 
        a number, and it is a factor of $n$, it must be the lowest 
        prime factor of $n$ that we have not yet processed.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="distinctprimefactorisation/sol"/>
    </>
  );
};
