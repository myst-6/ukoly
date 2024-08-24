import { Link, SCodeBlock, SList, SText, STitle } from "components";
import { brace, floor } from "solutions/util";

export const ParsingLists = () => {
  return (
    <>
      <STitle>Observation</STitle>
      <SText>
        At no point does any value in the list affect any other value in the list. This means that at each point, instead of building the entire list (which would be far too slow), we can simply calculate the value at the position required.
      </SText>

      <STitle>Sample Explanation</STitle>
      <SText>
        The $i$-th element with the description $E(OE)$ is equal to: $E[O[E[E[E[O[E[i]]]]]]]$.
        Now, working from the inside out:
      </SText>
      <SList>
        <SText>$E[3] = 6$</SText>
        <SText>$O[6] = 11$</SText>
        <SText>$E[11] = 22$</SText>
        <SText>$E[22] = 44$</SText>
        <SText>$E[44] = 88$</SText>
        <SText>$O[88] = 175$</SText>
        <SText>$E[175] = 350$</SText>
      </SList>
      <SText>
        So the $i$-th element with the description $E(OE)$ is equal to $350$, when $i=3$.
      </SText>

      <STitle>Idea</STitle>
      <SText>
        This problem is broken down into two parts:
      </SText>
      <SList>
        <SText>
          Efficiently calculating $O[i]$, $E[i]$ and $T[i]$ for any $i$, however large.
        </SText>  
        <SText>
          Parsing the description given in the input into a list of operations to perform in order.
        </SText>
      </SList>

      <STitle>Solution</STitle>
      <SText>
        For the first part, instead of treating $O$, $E$ and $T$ as lists, treat them as functions, where $O(x)$ is the value of $O[x]$, $E(x)$ is the value of $E[x]$ and $T(x)$ is the value of $T[x]$.
      </SText>
      <SList>
        <SText>
          It is easy to see that $E(x) = 2x$, since $E = [2, 4, 6, 8, 10, 12,\dots]$.
        </SText>
        <SText>
          Similarly, $O(x) = 2x - 1$, since $O = [1, 3, 5, 7, 9, 11,\dots]$.
        </SText>
        <SText>
          It gets somewhat more challenging for $T(x)$. There are two ways to calculate $T(x)$, 
          using math and using binary search. The math solution is to calculate
           that $T(x) =$ ${floor("\\sqrt{2x} + \\frac{1}{2}")}$. The binary search solution is to
          consider the function $L(i)$, which returns the last index $i$ such that $T(i) = k$, 
          and then binary search on $L$ to find such an $i$ such that $L(i) \geq x$ and $L(i-1) \lt x$.
          The value of $L(i)$ for any $i$ is simply the $i$-th triangular number, which is $\frac{brace("i(i+1)")}{brace("2")}$.
        </SText>
      </SList>
      <SText>
        For the second part, we can parse the string into a list of operations 
        to perform in order. To deal with brackets, when an opening bracket is found, 
        find the corresponding closing bracket and recursively parse the string inside
        the brackets. To find the corresponding closing bracket, keep a counter of the
        number of opening and closing brackets found so far, and when the number of closing
        brackets found is equal to the number of opening brackets found, you have found the
        corresponding closing bracket. This can all be done in one recursive function that returns
        a list of tokens, which can then be reversed (since the innermost operations need
        to be done before the outermost ones) and then evaluated in order using the 
        functions defined above. For example, the string $E(OE)$ would be parsed into the list 
        $[E, O, E, E, E, O, E]$, as described above.
      </SText>
      <SText>
        This problem is a miniature version of a programming language interpreter. If you enjoyed this problem,
        you may enjoy<Link href="https://www.youtube.com/watch?v=Eythq9848Fg&list=PLZQftyCk7_SdoVexSmwy_tBgs7P0b97yD" color="blue">this video series</Link>on how to build a programming language interpreter.
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="parsinglists/sol" />
    </>
  );
};