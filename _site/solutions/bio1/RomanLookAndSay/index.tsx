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
        By running {<SCode>n</SCode>} loops, with each loop applying Roman look-and-say description on the current string, and outputting number of Is and Vs at the very end, we can finish our solution. 
      </SText>
      <STitle>Implementation Detail</STitle>
      <SText>
        We can convert an integer number to a roman numeral string by greedily taking the greatest number of powers of ten in each go. 
        There are many ways to do this, but the simplest one (in my opinion) is to construct an array of {<SCode>ones</SCode>}, {<SCode>tens</SCode>} and {<SCode>hundreds</SCode>}.

        To apply Roman look-and-say to a string, we can keep track of {<SCode>last</SCode>} (the last character we encountered), {<SCode>len</SCode>} (the number of contiguous {<SCode>last</SCode>} encountered so far) and {<SCode>t</SCode>} (an initially empty string, which would have our new string by the end). 
        The intricate implementation details can be found below. Note that on line 17, we add a garbage character '.' at the end, such that {<SCode>t</SCode>} would contain the residual information of {<SCode>last</SCode>} and {<SCode>new</SCode>}. 
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="romanLookAndSay/sol"/>
    </>
  );
};
