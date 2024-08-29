import { SCode, SCodeBlock, SText, STitle } from "components";

export const RomanLookAndSay = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Since constraints are small, this is a simple simulation question. 
      </SText>
      <STitle>Solution</STitle>
      <SText> 
        We can solve the problem by applying the "Roman look-and-say" description {<SCode>n</SCode>} times, and then outputting the number of Is and Vs in the string after {<SCode>n</SCode>} operations. 
      </SText>
      <STitle>Implementation Detail</STitle>
      <SText>
        We can convert an integer number to a Roman numeral string by greedily taking the greatest number of powers of ten in each go. 
        A simple way to do this is to construct an array of {<SCode>ones</SCode>}, {<SCode>tens</SCode>} and {<SCode>hundreds</SCode>}.

        To apply Roman look-and-say to a string, we can keep track of {<SCode>last</SCode>} (the last character we encountered), {<SCode>len</SCode>} (the number of contiguous {<SCode>last</SCode>} encountered so far) and {<SCode>t</SCode>} (an initially empty string, which would have our new string by the end). 
        The intricate implementation details can be found below. Note that we add a garbage character '.' at the end, such that {<SCode>t</SCode>} would contain the remaining unused information of {<SCode>last</SCode>} and {<SCode>new</SCode>}. 
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="romanLookAndSay/sol"/>
    </>
  );
};
