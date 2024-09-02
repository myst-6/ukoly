import { SCode, SCodeBlock, SText, STitle } from "components";

export const Anagrams = () => {
  return (
    <>
      <STitle>Solution</STitle>
      <SText>
        Just sort the characters of the two strings alphabetically 
        (using the built-in <SCode>sorted</SCode> function in Python,
        or <SCode>sort</SCode> in C++), and compare the two sorted strings.
        If they are equal, then the two strings are anagrams.
      </SText>
      <SCodeBlock path="anagrams/sol"/>
    </>
  );
};
