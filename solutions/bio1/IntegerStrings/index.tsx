import { Link, SCodeBlock, SText, STitle } from "components";
import { brace } from "solutions/util";

export const IntegerStrings = () => {
  return (
    <>
      <STitle>Observation</STitle>
      <SText>
        This problem becomes much easier when you consider the string when $n=1$.
      </SText>

      <STitle>Sample Explanation</STitle>
      <SText>
        If we start at $999$, the string is $9991000100110021003...$. The $1$-st digit is $9$, the $2$-nd digit is also $9$, the $11$-th digit is $1$.
      </SText>

      <STitle>Idea</STitle>
      <SText>
        The digit at the $i$-th position in the string when $n=1$ is the same as the digit at the $i+k$-th position in the string when $n=1$, where $k$ is the number of digits before $n$ appears in the string.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        Of course, we can't generate the entire string. However, we can calculate the number of digits before $n$ appears in the string. We can then calculate the digit at the $i$-th position in the string when $n=1$ by calculating the digit at the $i+k$th position in the string when $n=1$.
      </SText>
      <SText>
        To calculate the number of digits before $n$ appears in the string, we can consider the number of $1$-digit numbers below $n$, the number of $2$-digit numbers below $n$, and so on. We can then calculate the number of digits before $n$ appears in the string by summing each of these values multiplied by the number of digits in each number. This can be done in $\mathcal{brace("O")}(\log(n))$ time.
      </SText>
      <SText>
        After this, we can calculate the digit 
        at the $i$-th position in the string starting 
        at $1$ by checking the number of digits occupied 
        by the concatenation of all $1$-digit numbers, 
        and if this is less than $i$, we can subtract 
        this number from $i$ and can check the number 
        of digits occupied by the concatenation of 
        all $2$-digit numbers, and so on. When this 
        is done, the problem is reduced to simply 
        dividing $i$ by $d$, where $d$ is the number of digits
        in the number which contains the $i$-th digit of the string
        starting at $1$.
        This can be done in $\mathcal{brace("O")}(\log(n))$ time.
      </SText>
      <SText>
        Be careful with off-by-one errors - to prevent these,
        you can debug your solution by printing the first $100$ 
        or so digits for various values of $n$ to ensure that
        your solution is correct. 
      </SText> 
      <SText>
        For the version of the problem where $n=1$, 
        and a whole host of better explanations, see<Link href="https://cses.fi/problemset/task/2431" color="blue">this CSES problem</Link>
        and the vast array of explanations available online.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="integerstrings/sol" />
    </>
  );
};
