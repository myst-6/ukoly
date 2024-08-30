import { SCodeBlock, SText, STitle, SCode, SSubtitle, SList } from "components";
import { brace } from "solutions/util";

export const ModernArt = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Let's first consider the brute force approach. 
        We can generate all of the paintings, and iterate up to $n$.
        However, this is not feasible, as $n \leq {brace("2^{34}")} \approx {brace("10^{10}")}$.
        Instead, we should use dynamic programming to construct the answer efficiently.
      </SText>

      <STitle>Solution</STitle>
      <SSubtitle>Counting strings with counts of characters</SSubtitle>
      <SText>
        Let's first define a function that takes in parameters $a$, $b$, $c$ and $d$ 
        - the counts of characters <SCode>"A"</SCode>, <SCode>"B"</SCode>, <SCode>"C"</SCode> and <SCode>"D"</SCode> in the string respectively.
        It should also take in the length of the string that needs to be constructed.
        Let's first set up some base cases:
      </SText>
      <SList>
        <SText>
            If the count of any of the letters is less than $0$, the input is not valid, 
            and so we can return $0$, as there are exactly $0$ strings that can be made.
        </SText>
        <SText>
            If the length of the string is $1$, the number of ways to contruct the string is the number of letters with a count greater than $0$.
        </SText>
      </SList>
      <SText>
        Finally, the number of ways to construct a string with a specified count of characters, is equal to the sum of:
      </SText>
      <SList>
        <SText>
            The number of ways to construct a string with length $length-1$ and $a-1$, $b$, $c$ and $d$ characters (make <SCode>"A"</SCode> the first character).
        </SText>
        <SText>
            The number of ways to construct a string with length $length-1$ and $a$, $b-1$, $c$ and $d$ characters (make <SCode>"B"</SCode> the first character).
        </SText>
        <SText>
            The number of ways to construct a string with length $length-1$ and $a$, $b$, $c-1$ and $d$ characters (make <SCode>"C"</SCode> the first character).
        </SText>
        <SText>
            The number of ways to construct a string with length $length-1$ and $a$, $b$, $c$ and $d-1$ characters (make <SCode>"D"</SCode> the first character).
        </SText>
      </SList>
      <SText>
        We can count this recursively. To remove repeated work, we should memoize the results.
        We can do this either by using a <SCode>std::map</SCode>, or Python's <SCode>functools.lru_cache</SCode>.
      </SText>

      <SSubtitle>Finding the Answer</SSubtitle>
      <SText>
        We now need to find each character of the answer.
        To do this, we can find the interval each character falls in (it may be useful to think of it as a variation of binary / ternary search, with 4 intervals).
        We can count the find the indexes of strings beginning with a letter, and if the desired value $n$ is in the interval, we can recursively build the solution.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="modernart/sol"/>
    </>
  );
};
