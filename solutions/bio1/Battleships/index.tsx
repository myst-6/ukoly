import { SCodeBlock, SSubtitle, SText, STitle, SCode, SList } from "components";

export const Battleships = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Let's first notice that the board's size is small. 
        This suggests it is feasible to simulate each battleship's placement. 
      </SText>

      <STitle>Solution</STitle>
      <SText>
        With larger problems (often Question $2$), it is useful to define a set of functions to help solve the problem.
        In this problem, we can define a class, <SCode>Board</SCode>, that allows us to check a position, and place a ship in a valid position.
      </SText>

      <SSubtitle>Querying the Validity of a Position</SSubtitle>
      <SText>
        For a starting position to be valid, it must satisfy the following conditions:
      </SText>
      <SList>
        <SText>The ship must fit within the board</SText>
        <SText>None of the positions where the ship will be should be occupied</SText>
        <SText>None of the positions where the ship will be should be adjacent to another ship.</SText>
      </SList>
      <SText>
        For an inputted row and column on the board, we can return if both of these statements are true.
      </SText>

      <SSubtitle>Placing a Ship</SSubtitle>
      <SText>
        To add a ship at a position, we should first check if the position is valid.
        If it is, we can simply mark all the cells the ship now occupies as occupied in a $10 \times 10$ grid.
        Finally, we can iterate through all the ship lengths and place the ships as indicated by the problem statement.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="battleships/sol"/>
    </>
  );
};
