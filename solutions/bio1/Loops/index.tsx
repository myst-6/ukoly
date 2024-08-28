import { SCodeBlock, SText, STitle, SCode, SSubtitle } from "components";

export const Loops = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Due to the small number of cell types, we know what each cell's position must be in relation to another cell in order to form a loop.
        For example, we know that for the red lines to be a connected, a cell of type $5$ must be above a cell of type $1$, $3$ or $4$.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        For larger problems (often Question $2$), it is useful to create a set of functions to make it easier to solve the problem. 
        In this problem, we can create a function, <SCode>getAdj</SCode>, that returns the cells connected to a certain cell.
        To do this, we first know that for two cells to be connected, they must be opposite types - 
        i.e. the bottom cell must be able to connect upwards and the top cell must be able to connect downwards, or the same with left and right cells.
        Then we can easily test if $2$ cells are connected by checking their types.
      </SText>

      <SSubtitle>Finding the Length of a Loop</SSubtitle>
      <SText>
        To find the length of the loop, we can keep track of the cell we have just visited, and the cell we are currently at.
        We can then keep moving to the next cell (the adjacent cell that we did not visit in the previous move) until we reach the cell we started at.
        We can then return the number of moves we made.
        To prevent recounting the same loop, we can mark all the cells we have visited, and only count the loops beginning at unvisited cells.
      </SText>

      <SSubtitle>Calculating the Score</SSubtitle>
      <SText>
        Since the size of the grid is quite small, we can simply iterate through each cell and check if it is unvisited.
        If it is, then we can calculate the length of the loop starting at that cell and add it to the score of the player.
        We can then repeat this same process for the second player. 
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="loops/sol"/>
    </>
  );
};
