import { SCodeBlock, SText, STitle } from "components";

export const AnagramNumbers = () => {
  return (
    <>
      <STitle>Solution</STitle>
      <SText>
        Just iterate through all the digits from $2$ to $9$,
        and check if the sorted list of the input number 
        is equal to the sorted list of the input number multiplied
        by the current digit.
      </SText>
      <SText>
        This is a common trick to check if two strings are 
        anagrams - just sort them and compare.
      </SText>
      <SCodeBlock path="anagramnumbers/sol"/>
    </>
  );
};
