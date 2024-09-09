import { SCodeBlock, SText, STitle } from "components";
import { brace } from "solutions/util";

export const Trail = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Let's first notice the small constraint on $m$. 
        This suggests that it is feasible to simulate all $m$ moves.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        To keep track of the trail, we can use a hashmap, storing the last time a cell was visited.
        Unvisited cells can be stored as $-{brace("\\text{inf}")}$, where ${brace("\\text{inf}")}$ is a large number.
        We can simulate each move by keeping track of the direction and position of the explorer.
        To check if a cell contains a trail, we simply need to compare the current time, with the time the trail was last visited.
        Formally, if the current time is $j$, and the last time the cell was visited was $i$, 
        the trail still exists if $j - i {brace("~<~")} t$.
        Now, we can simulate each move as specified by the problem statement, and output the explorer's final position.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="trail/sol"/>
    </>
  );
};
