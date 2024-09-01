import { SCodeBlock, SText, STitle, SCode } from "components";
import { brace } from "solutions/util";

export const UpsideDown = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Let's first notice the large constraint on $n$. 
        This means that we can't simply generate all numbers up to the $n-th$ number, as this would be too slow.
        Instead, we can generate the $n$-th number efficiently, using dyanmic programming.
      </SText>

      <STitle>Solution 1</STitle>
      <SText>
        Let's first define a function that counts the number of ways to construct a number of a specified length, $l$. 
        We can notice that there are always $9$ ways to add a digit, $d$ to the start of the number, and the digit at the end is always $10-d$.
        This means, we can define the function to be $f(l) = 9 \cdot f(l-1)$, with the base case $f(1) = 1$, as 
        the only valid number of length $1$ is $5$.
        To prevent repeated calls, we should memoize the function.
        This can be done using an <SCode>std::map</SCode>, or Python's <SCode>functools.lru_cache</SCode>.
      </SText>
      <SText>
        Using this function, we can then calculate the length of the $n$-th number. 
        We can do this by iterating through the lengths of the numbers and keeping track of the total number of ways to construct a number greater than or equal to that length.
        The first length that results in the total number of ways being greater than or equal to $n$ is the length of the $n$-th number.
      </SText>
      <SText>
        Now we can recursively solve the problem. 
        The number of ways to construct a number beginning with digit $d$ is $f(l-2)$, where $l$ is the length of the number.
        This means that we can iterate through each possible digit, and keep track of the number of ways to make a number less than the $n$-th number.
        Once we reach a digit that causes the number of ways to be greater than or equal to $n$, we can recursively call the function, to solve for the next digit.
        Note that the base cases are when the length of the number is $1$, in which case the only valid number is $5$, and when the length of the number is $0$, we can return an empty string.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="upsidedown/sol1"/>

      <STitle>Solution 2</STitle>
      <SText>
        However, we can notice that the function $f$ is similar to the function to calculate $9^x$, for some integer $x$.
        In fact, we can see that $f(l) = 9^{brace("\\lfloor \\frac{l}{2} \\rfloor")}$.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="upsidedown/sol2"/>
    </>
  );
};
