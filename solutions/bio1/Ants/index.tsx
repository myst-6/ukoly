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
        It is imperative that this is done in the correct order, or else the outcome will be completely different.
      </SText>

      <SSubtitle>Removing an ant</SSubtitle>
      <SText>
        If an ant falls off the edge of the board, you can set a flag, which prevents it from running any more functions, and prints "Removed" instead of its position.
      </SText>

      <SSubtitle>Initialising the board</SSubtitle>
      <SText>
        Initalising the board is simple: an $11$x$11$ white grid. (I used a 2D Boolean List.)
        Initalising the ants is also simple, input their positions and directions, and then parse them into usable data. (I subtract one for zero indexing, and change the direction into a number, which i use as an index to a list of directions.
      </SText>

      <SSubtitle>Mainloop</SSubtitle>
      <SText>
        Before the mainloop, the program takes in an initial value for $n$, then uses it in a while loop, which has the condition ($n \neq -1$).
        This allows it to exit immediately on the first round, rather than producing buggy behaviour.
        After this, both bugs are moved in turn $n$ times.
        The entire grid is then printed out.
        Finally, both bugs' positions are printed out, checking if they have fallen off.
        At the end of the mainloop, a new value for $n$ is taken in, to repeat the cycle.
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="ants/sol"/>
    </>
  );
};
