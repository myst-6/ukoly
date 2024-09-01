import { SCodeBlock, SText, STitle } from "components";

export const IncreasingPasswords = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        From the constraint on $n$, we can see that it is not feasible to generate each possible password.
        Instead, we should use dynamic programming to efficiently build the $n$-th password.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        Let's first define a recursive function that gets the number of passwords of length $n$, with all of its letters being greater than $c$.
        To do this, we can first define the base case for when the length is $1$. 
        The number of ways to generate a password of length $1$ with all characters greater than $c$: $36 - c$.
        Otherwise, we can recursively call the function with the length $n-1$ and the character $c+i$ for all values of $i$ such that $c+i \leq 36$ ($1$-indexed).
        We can notice that the number of ways to generate a password of length $n$ with the first letter being $c$ is $f(n, c) - f(n, c-1)$.
      </SText>
      <SText>
        Next, we should find the length of the password.
        To do this, we can iterate while the number of ways to generate a password of length less than or equal to $i$ is less than $n$.
        Now we can build the password of this length.
      </SText>
      <SText>
        Now we can recursively build the $n$-th password. 
        We can first set up a base case, where the length of the password is $1$. The output here should be the $(n - ways)$-th letter possible ($1$-indexed). 
        To recursively build the password, we can iterate through each possible character, and check if the number of ways to build it and all the passwords before it is greater than or equal to $n$. 
        If it is at least $n$, we know that the current letter is the next letter in the result, and so we can append it, and recursively solve for $length - 1$.
        We can finally output the result.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="increasingpasswords/sol"/>
    </>
  );
};
