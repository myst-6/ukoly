import { SCodeBlock, SText, STitle, SCode, SSubtitle } from "components";

export const DotsAndBoxes = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        We can store each of the edges based on if they are horizontal or vertical.
      </SText>
      <SText>
        Every time an update is made, we can update the board to show a square has been claimed.
      </SText>
      <SText>
        We can then simulate each turn of the problem. 
      </SText>

      <STitle>Solution</STitle>
      <SText>
        For larger problems (often question $2$), it is often useful to abstract the problem, by creating a set of functions to simplify actions.
      </SText>
      <SText>
        We will initialise a class <SCode>Board</SCode>, that will store the state of the board, and have functions to update the board, and check if a square has been claimed.
      </SText>
      <SText>
        The functions should be able to add an edge (<SCode>addEdge</SCode>), and check if an edge has been claimed (<SCode>queryEdge</SCode>).
      </SText>
      <SText>
        For ease of output, we can also add a method to convert the board to a string.
      </SText>

      <SSubtitle>Adding an Edge</SSubtitle>
      <SText>
        To add an edge, we can check if the edge is horizontal or vertical, and update edges matrix accordingly.
      </SText>
      <SText>
        Afterwards, we should check if a square has been claimed, and update the board accordingly.
      </SText>

      <SSubtitle>Querying an Edge</SSubtitle>
      <SText>
        To query an edge, we can check if the edge is horizontal or vertical, and return the value from the edges matrix.
      </SText>

      <SSubtitle>Simulation</SSubtitle>
      <SText>
        Finally, we can simply simulate the game, by iterating through each turn, and updating the board accordingly.
      </SText>
      <SText>
        After the specified number of turns, we can output the board, and each player's score.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="dotsandboxes/sol"/>
    </>
  );
};
