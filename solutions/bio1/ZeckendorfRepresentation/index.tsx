import { SCodeBlock, SText, STitle } from "components";
import { brace } from "solutions/util";

export const ZeckendorfRepresentation = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
      An invalid Zeckendorf representation can be made into a valid one by repeatedly adding any two numbers that are at position $i$ and $i + 1$ in the Fibonacci sequence to get the number at position $i + 2$.      
      </SText>

      <STitle>Solution</STitle>
      <SText>
        A valid Zeckendorf representation can be generated by getting the largest Fibonacci number lower than or equal to the input integer $n$, subtracting that number from $n$ and repeating while $n$ is positive.
      </SText>
      <SText>
        You can use proof by contradiction to show that the method always produces a valid Zeckendorf representation:
      </SText>
      <SText>
        Assume that this method produces an invalid representation.
        An invalid representation will contain two numbers $a_{brace("i")}$ and $a_{brace("i - 1")}$ but not $a_{brace("i + 1")}$, where $a_{brace("j")}$ is the number at position $j$ in the Fibonacci sequence.
        Due to the method of obtaining these numbers, we form the following inequalities: $a_{brace("i")} \leq n$, $a_{brace("i - 1")} \leq n - a_i$ and $a_{brace("i + 1")} \gt n$. 
        Therefore, $a_{brace("i - 1")} + a_i \leq n$ and so $a_{brace("i + 1")} \leq n$, but it is given that $a_{brace("i + 1")} \gt n$. There is a contradiction, and so the method cannot produce an invalid representation.
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="zeckendorfrepresentation/sol" />
    </>
  );
};