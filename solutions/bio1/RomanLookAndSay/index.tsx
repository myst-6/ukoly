import { SCode, SCodeBlock, SText, STitle, SList } from "components";

export const RomanLookAndSay = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Since constraints are small, this is a simple simulation question. 
      </SText>
      <STitle>Solution</STitle>
      <SText> 
        We can solve the problem by applying the "Roman look-and-say" description $n$ times, and then outputting the number of $\textit{"I"}$s and $\textit{"V"}$s in the string after $n$ operations. 
      </SText>
      <STitle>Implementation Detail</STitle>
      <SText>
        We can convert an integer number to a Roman numeral string by greedily taking the greatest number of powers of ten in each go. 
        A simple way to do this is to construct an array of {<SCode>ones</SCode>}, {<SCode>tens</SCode>} and {<SCode>hundreds</SCode>}.

        To apply Roman look-and-say to a string, we can keep track of the following variables: 
        <SList>
          <SText>
            {<SCode>last</SCode>} (the last character we encountered)
          </SText>
          <SText>
            {<SCode>sz</SCode>} (the number of contiguous {<SCode>last</SCode>}) 
          </SText>
          <SText>
            {<SCode>sz</SCode>} (the number of contiguous {<SCode>last</SCode>}) 
          </SText>
          <SText>
            {<SCode>t</SCode>} (an initially empty string, which will have our new string by the end)
          </SText>
        </SList>
        The intricate implementation details can be found below. Note that we add a garbage character '.' at the end, such that {<SCode>t</SCode>} would contain the remaining unused information of {<SCode>last</SCode>} and {<SCode>sz</SCode>}. 
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="romanLookAndSay/sol"/>
    </>
  );
};
