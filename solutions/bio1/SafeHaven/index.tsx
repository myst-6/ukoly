import { Link, SCodeBlock, SText, STitle, SSubtitle, SList } from "components";

export const SafeHaven = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        As with most Question 2s, it is sufficient to simply implement to problem statement, due to the small constraints on the board size. 
      </SText>

      <STitle>Solution</STitle>
      <SSubtitle>Setting up the Board</SSubtitle>
      <SText>
        The problem statement gives us a description of how the board is set-up. 
        It is sufficient to simply simulate this, by alternating turns, and iterating through the grid until a sufficient number of empty squares have been found.
        We can continue to do this until all the squares have been filled. 
      </SText>

      <SSubtitle>Scoring Each Haven</SSubtitle>
      <SText>
        The next part of the problem involves finding the best, non-safe haven. 
        These are ordered by:
        <SList>
            <SText>The number of squares containing the opponents colour (this should be minimised).</SText>
            <SText>The number of squares containing the current player's colour (this should be maximised).</SText>
            <SText>The position of the lowest value square of the haven (this should be minimised)</SText>
        </SList>
        We can efficiently do this for each haven by using a Breadth First Search (BFS, see more about this <Link href="https://usaco.guide/silver/graph-traversal?lang=cpp">here</Link>).
        For each cell in the haven, we can count the number of red and green squares, and keep a running score of the lowest square.
        Then, during the turn, we can simply run this on each haven, and sort the havens by the above criteria.
        Note that if the number of red or green squares is $0$, the haven is a safe haven and so is invalid. 
      </SText>

      <SSubtitle>Simulating Turns</SSubtitle>
      <SText>
        The final part of this problem involves finding the best move for the current player. 
        We can once again do this using a BFS. For ease of implementation, we can do this whilst scoring each haven.
        For each cell of the player's colour in each haven, we can check each of the adjacent cells. If they are of the opponent's colour, we can compare them with the current minimum cell, and update the minimum cell if necessary.
        From here it is easy to simply simulate the turn, by transferring the current player's colour to the opponent's square.
      </SText>

      <SSubtitle>Counting Safe Havens</SSubtitle>
      <SText>
        Earlier, we mentioned that safe havens are when the number of red or green squares in a haven is $0$.
        Therefore, to find count the number of safe havens, we can once again run a BFS on each haven, and check whether it is a red or green safe-haven.
        We can then output this count as the question requires. 
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="safehaven/sol"/>
    </>
  );
};
