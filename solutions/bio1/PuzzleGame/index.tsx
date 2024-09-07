import { SCodeBlock, SText, STitle, SCode, SSubtitle, Link } from "components";

export const PuzzleGame = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        From the constraint on $n$ and the small board size, we can see that it's feasible to simulate the game.
        To do this, we can maintain the current state of the board, as well as the next pieces in each column.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        For larger questions (often question $2$), it is useful to define a set of functions to perform the operations on the board.
        For this question, we can define a class <SCode>Board</SCode>, to allow each round to be simulated on the board.
      </SText>

      <SSubtitle>Storing the Board</SSubtitle>
      <SText>
        The conventional method of storing the board is not useful.
        This is because when a piece is removed, we would manually have to shift all the pieces above it down.
        Instead, we can flip the rows and the columns, so that deleting a piece will automatically cause all the pieces above it to fall down.
        Additionally, we should store the next pieces of each column in the same way, allowing us to easily get the next piece in each column.
      </SText>

      <SSubtitle>Simulating a Round</SSubtitle>
      <SText>
        To simulate a round, we should first identify all blocks of pieces. 
        To do this, we can use a standard DFS algorithm to find all connected pieces 
        (see more about this <Link href="https://usaco.guide/silver/graph-traversal">here</Link>). 
        Then, we can fill all the pieces with a special character, to mark that they are part of a block.
        After all the blocks have been identified, we can remove them all. 
      </SText>

      <SSubtitle>Removing a Block</SSubtitle>
      <SText>
        To remove a block, we can find all occurences of the special character.
        For each special character, we should append the next piece to the end of the column. 
        Then, after all special characters have been processed, they should be all removed, 
        causing the new pieces to shift into the $4\times4$ board.
      </SText>

      <SSubtitle>Simulation</SSubtitle>
      <SText>
        Now we can simulate the game, by repeatedly calling the <SCode>simulateRound</SCode> function.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="puzzlegame/sol"/>
    </>
  );
};
