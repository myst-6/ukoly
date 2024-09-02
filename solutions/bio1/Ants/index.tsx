import { SCodeBlock, SSubtitle, SText, STitle, SCode, SList } from "components";

export const Ants = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Let's first notice that the board's size is small. 
        This suggests it is feasible to simulate this entire problem. 
      </SText>

      <STitle>Solution</STitle>
      <SText>
        With larger problems (often Question $2$), it is useful to define a set of functions to help solve the problem.
        In this problem, we can define a class, <SCode>Ant</SCode>, that allows us to store the ants' positions, move them, and print their positions.
      </SText>

      <SSubtitle>Moving an ant</SSubtitle>
      <SText>
        Moving an ant is a simple process.
      </SText>
      <SList>
        <SText>Move the ant based on the current direction</SText>
        <SText>Update the ant's direction based on the colour of the square</SText>
        <SText>Toggle the colour of the square</SText>
      </SList>
      <SText>
        It is imperative that this is done in the correct order, or else the outcome will be completely different
      </SText>

      <SSubtitle>Removing an ant</SSubtitle>
      <SText>
        If an ant falls of the edge of the board, you can set a flag, which prevents it from running any more functions, and prints "Removed" instead of its position
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="ants/sol"/>
    </>
  );
};
