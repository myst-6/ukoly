import { SCodeBlock, SText, STitle } from "components";
import { brace } from "solutions/util";

export const GoldbachConjecture = () => {
  return (
    <>
      <STitle>Solution</STitle>
      <SText>
        Notice that the constraint on $n$ is tiny. Therefore, 
        we can simply iterate through all possible values of 
        $i$ from $2$ to $\frac {brace("n")} {brace("2")}$, 
        and check if both $i$ and $n-i$ are prime, and increment 
        the answer if they are.
      </SText>
      <SText>
        We could have also used the Sieve of Eratosthenes to
        precompute the primes, but it is not necessary for this
        problem due to the small constraint.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="goldbachconjecture/sol"/>
    </>
  );
};
