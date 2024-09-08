import { SCodeBlock, SText, STitle } from "components";

export const MorseCode = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Let's first notice the small constraint on the size of the word.
        This suggests we can try every possible valid split of the word.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        We can solve this problem by using a recursive function that tries every possible split of the Morse code.
        For each split, we can check if the first part is a valid Morse code character.
        If it is, we can recurse on the rest of the word.
        If we reach the end of the word, we have found a valid split.
        We should ensure we do not perform more than $s$ splits, where $s$ is the size of the original word.
        To prevent duplicate work, we can memoize the results of the recursive function.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="morsecode/sol"/>
    </>
  );
};
