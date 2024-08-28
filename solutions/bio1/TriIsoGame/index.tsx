import { SCodeBlock, SText, STitle, SList, SCode, Image, HStack, SSubtitle } from "components";

export const TriIsoGame = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Due to the small constraint on $m$, we can simulate the game on a sparse grid (a grid large enough to accommodate the maximum constraint on $m$). 
      </SText>

      <STitle>Solution</STitle>
      <SText>
        For larger problems (often Question $2$), it is useful to define a set of functions to make it easier to solve the problem. 
        In this case, we can define a set of classes:
      </SText>
      <SList>
        <SText>
            <SCode>Edge</SCode> which stores one edge of the triangular grid. It should also store the triangular cells it is part of.
        </SText>
        <SText>
            <SCode>Triangle</SCode> and <SCode>InvertedTriangle</SCode> (for upside down cells), which represent each triangular cell. 
            They should store the edges that make up the cell, as well as if they have been claimed by a player.
        </SText>
        <SText>
            <SCode>Grid</SCode> which is made up of multiple triangles and inverted triangles. 
            It should construct each cell, whilst creating an overlapping edge between cells. 
            The size of the grid should be sparse enough to prevent the players from running out of space. 
        </SText>
      </SList>
      <SSubtitle>Traversing the Perimeter</SSubtitle>
      <SText>
        To solve the problem, we need to be able to get the next clockwise edge of the current shape.
        Due to the small number of possibilities, we can simply hardcode the next edge for each type of edge. 
      </SText>
      <HStack>
        <SText>
          We can see that for each edge, we can iterate through all the adjacent edges anticlockwise, 
          and check if the triangle adjacent it has been claimed. 
          From the diagram, we can see that there are $5$ possibilities for each edge.
          Note that we should handle <SCode>Triangle</SCode> and <SCode>InvertedTriangle</SCode> separately.
        </SText>
        <Image src="/assets/images/triisogame/direcs.png" width="20rem" padding="2%" justifyContent="center" alt="Adjacent edges to Right Edge"></Image>
      </HStack>
      <SText>
        Now to move around the perimeter, we can repeatedly get the adjacent edge to the current one, and transition to it,
        by making the adjacent edge the new current edge.
      </SText>

      <SSubtitle>Finding Optimal Moves</SSubtitle>
      <SText>
        Additonally, we can create a function to check if claiming a cell will result in gaining a point.
        To do this, we can check each of the $3$ possible large triangles which can be formed from the current cell.
        If the value in any of the large triangles is equal to the player's number, then it is optimal for the player to stop
        at that cell to allow them to win the point in the next turn. 
      </SText>

      <SSubtitle>Finding the Perimeter</SSubtitle>
      <SText>
        It is now possible to simulate the position of each player on the grid.
        The last step is to find the perimeter of the claimed cells.
        To do this, we can arbitrarily choose a player, and make them traverse the perimeter of the cells
        until they reach the point where they started. 
        The number of traversals they make is equal to the perimeter. 
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="triisogame/sol"/>
    </>
  );
};
