import { SCodeBlock, SText, STitle, SCode, SList } from "components";
import { brace } from "solutions/util";


export const PalindromicSums = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        We can first notice the constraints of the problem. Since the input, $n$, is less than $10^6$, we can easily generate all the palindromes up to $10^6$ in $\mathcal{brace("O")}(n\log_{brace("10")}n)$ time.
        From here, we can use a brute force method to find the answer. 
      </SText>      

      <STitle>Solution</STitle>
      <SText>
        We can start by iterating up to $10^6$ and checking if each number is a palindrome by checking if its string representation is the same as its string representation reversed. If it is, we can add it to an ordered set allowing for fast lookup. 
        Note that in Python, <SCode>set()</SCode> is an unordered set, so instead, we can use a list to keep track of the ordering, and a set to allow for fast lookup. 
        Then we can go through each of the three cases:
        <SList>
          <SText>Case 1: $n$ is a palindrome. We can check this by checking if $n$ is in the set of palindromes. In this case, we can just return $n$.</SText>
          <SText>Case 2: $n$ is the sum of $2$ palindromes. In this case, we can iterate through each palindrome (in order, so we get the smallest first), $i$, and check if $n - i$ is in the set of palindromes. If it is, we can return $i$ and $n - i$.</SText>
          <SText>Case 3: $n$ is the sum of $3$ palindromes. The approach this time is similar to case 2: we iterate through the first $2$ palindromes $i$ and $j$ and check if $n - i - j$ is in the set of palindromes. Then we can return $i$, $j$ and $n - i - j$</SText>
        </SList>
        By printing the length of the set of palindromes up to $10^6$, we can see that there are around $2000$ palindromes. Therefore, an $\mathcal{brace("O")}(n^2)$ approach is feasible.
      </SText>
            
      <STitle>Code</STitle>
      <SCodeBlock path="palindromicsums/sol" />
    </>
  );
};
