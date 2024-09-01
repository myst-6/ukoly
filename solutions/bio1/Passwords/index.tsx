import { SCodeBlock, SText, STitle } from "components";

export const AnagramNumbers = () => {
  return (
    <>
      <STitle>Solution</STitle>
      <SText>
        We brute force over all possible even substring lengths and check if the first half is equal to the second. If so, immediately return true, else return false at the very end.
      </SText>
      <SCodeBlock path="passwords/sol"/>
    </>
  );
};
