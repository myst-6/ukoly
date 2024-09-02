import { SCodeBlock, SText, STitle } from "components";

export const Lojban = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        We can first notice that the constraint for the value of the inputted number is quite small.
        This suggests that we can brute force the solution by iterating through the string. 
      </SText>
      <SText>
        We can write a list with each Lojban digit equal to the index. 
        We can then write a for loop which checks every two letters of the input Lojban string. 
        We can then find the index of this key and add it to the output as a string, and finally output it.
      </SText>
      
      <STitle>Code</STitle>
      <SCodeBlock path="lojban/sol"/>
    </>
  );
};
