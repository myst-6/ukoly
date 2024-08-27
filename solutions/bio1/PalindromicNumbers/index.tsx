import { Link, SCodeBlock, SList, SText, STitle } from "components";
import { frac, ceil} from "solutions/util";

export const PalindromicNumbers = () => {
  return (
    <>
      <STitle>Observation</STitle>
      <SText>
        An $n$ digit palindrome is uniquely determined by its length, and its first ${ceil(frac("n","2"))}$ digits. This is because if $n$ is even, we can flip the first half to create the second half of the number, and if $n$ is odd, we can leave out the middle digit and flip the remainder to get the second half.
      </SText>

    

      <STitle>Solution</STitle>
      <SText>
        Take the first ${ceil(frac("n","2"))}$ of the digits of the given $n$ digit integer. If the $n$ digit palindrome created by appropriately flipping and appending this digit sequence is larger than the given integer, return this palindrome. If not, increment the first half by $1$, and then generate the next palindrome. A separate case is needed in circumstances when the length of the palindrome has to change, i.e. when the input is $999 \dots 9$. In this case the answer is simply $2$ more than the input, i.e. $1000 \dots 1$.
      </SText>
      
      <STitle>Sample Explanation</STitle>
      <SText>
        Following our algorithm gives $17 \rightarrow$ (first half) $\rightarrow 1 \rightarrow$ (palindromify) $\rightarrow 11$ (too small). So $1 \rightarrow$ ($+1$) $\rightarrow 2 \rightarrow$ (palindromify) $\rightarrow 22$.
        Similarly, $343 \rightarrow$ (first half) $\rightarrow 34 \rightarrow$ (palindromify) $\rightarrow 343$ (too small). So $34 \rightarrow$ ($+1$) $\rightarrow 35 \rightarrow$ (palindromify) $\rightarrow 353$.
      </SText>
      
      <STitle>Code</STitle>
      <SCodeBlock path="palindromicnumbers/sol" />
    </>
  );
};
