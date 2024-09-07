import {SCodeBlock, SText, STitle, SCode } from "components";

export const DieTipping = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Let's notice the small constraint on the value of $n$.
        This means we can simply simulate each die move. 
      </SText>

      <STitle>Solution</STitle>
      <SText>
        In larger problems (often question $2$), it is useful to define a set of functions to help solve the problem.
        In this case, we can define a class <SCode>Die</SCode>, which stores the current state and position of the die.
        For each die move, we can simply update the number on each face of the die, as well as the die's position.

        Finally, to get the heading of the die, we can simply keep track of the directions in clockwise order, 
        and rotate the list of directions based on the move (so that the current heading of the die is always at the front of the list).

        Now we can simply simulate each die move based on the current state of the board. 
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="dietipping/sol" />
    </>
  );
};
