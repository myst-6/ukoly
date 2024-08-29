import { SCodeBlock, SText, STitle, SCode, SSubtitle, SList } from "components";

export const GameOfDrones = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Let's first notice that the grid is quite small. 
        This means it is feasible to simulate the game. 
      </SText>

      <STitle>Solution</STitle>
      <SText>
        For larger problems (usually Question $2$), it is useful to create a set of functions to solve the problem.
        In this case, we can define a class <SCode>Board</SCode> which stores the current state of the hive. 
        We can define the hive to be a $5 \times 5$ grid of hexagons, where each hexagon is represented by a dataclass <SCode>Hexagon</SCode>, which stores the state of each of the edges.
      </SText>

      <SSubtitle>Skirmish: Claiming an Edge</SSubtitle>
      <SText>
        To claim an edge, we can firstly update the state of the edge in the <SCode>Hexagon</SCode> class.
        However, we must also consider that updating a shared edge also will update the state of it in the adjacent hexagon.
        To handle this, we can calculate the offsets of the adjacent hexagons based on the direction of the edge. 
        We can note that the offset is different based on if the row is even or odd.
        The new edge direction will be a reflection of the current edge direction.
        We should also check if the edge is valid, as not all edges will have an adjacent hexagon, e.g. edge $1$ in the top row hexagons.
        Using the <SCode>claim</SCode> function, we can now easily simulate the skirmishes.
      </SText>

      <SSubtitle>Feud: Finding Preferred Edges</SSubtitle>
      <SText>
        To find if an edge is preferred, we can iterate through each unowned edge and calculate a score for it. 
        We should then choose the edge with the highest score.
        To calculate the edge, we should calculate each of the parameters specified by the problem statement.
      </SText>
      <SList>
        <SText>
          <b>The number of hexagons that claiming the edge will gain the player. </b> 
          To calculate this, we can simulate what will happen if the edge is claimed.
          We can claim the edge, and calculate the number of hexagons that are gained. 
          Then we can once again unclaim it (claiming it by a <SCode>null</SCode> player).
        </SText>
        <SText>
          <b>The number of hexagons that the opponent loses. </b>
          We can calculate this the same way as the the gained hexagons. 
          We should then negate the value we recieve, as we wish to maximise the loss. 
        </SText>
        <SText>
            <b>Hexagon number. </b>
            We can simply use the row and column the hexagon is in. 
            For the red drone, we should negate these values, as we wish to minimise them.
        </SText>
        <SText>
            <b>Direction. </b>
            We can do this the same way as the hexagon number. 
            We should once again negate the value for the red drone, as we wish to minimise it.
        </SText>
      </SList>
      <SText>
        We can pack these into a tuple in order of priority, and compare the scores directly. 
        We can then simulate each feud by iterating through each edge of each hexagon, and find the edge that maximises the score.
        We can then claim this edge.
      </SText>
      <SText>
        Finally, to find the number of hexagons each player has, we can iterate through each hexagon and check if the hexagon is owned by the player.
        We can output this as the result.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="gameofdrones/sol"/>
    </>
  );
};
