import { SCodeBlock, SText, STitle, SCode, SSubtitle, SList } from "components";

export const Neutron = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Due to the small size of the board, it is sufficent to simulate the game.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        For larger problems (often Question $2$), it is useful to define a set of functions to make game actions easier to carry out.
        For this problem, we can define a class, <SCode>Board</SCode>, that stores the current state of the board, 
        and the positions of each piece and the neutron.
      </SText>

      <SSubtitle>Moving the Neutron</SSubtitle>
      <SText>
        The first part of the problem involves moving the neutron to either a winning square, or the first clockwise square, 
        as specified by the problem statement.
        We can define a function, <SCode>getMovesNeutron</SCode>, to get all of the possible neutron moves for a player.
        For each move, we should check the following conditions:        
      </SText>
      <SList>
        <SText>
            If the neutron is in a winning position, we can return the move immediately.
        </SText>
        <SText>
            If the neutron is in a losing position, we should save the first such move.
            This move will only be played if there are no other moves for the neutron.
        </SText>
        <SText>
            If the neutron hasn't moved, we should ignore the direction, as no move has been made.
        </SText>
        <SText>
            Otherwise, we should return all of the possible, valid moves, if they exist. 
            If there are no moves available, we should return the losing move.
            If there is no losing move, we should return an empty list. 
        </SText>
      </SList>
      <SText>
        We can now carry out the first move in the returned list of moves, by simply updating the position of the piece.
        If no moves are carried out, we should break out of the game loop, as the player has lost.
        If a winner is found, we should also break out of the game loop.
      </SText>

      <SSubtitle>Moving the Piece</SSubtitle>
      <SText>
        To move a piece, we can once again define a function, <SCode>getMoves</SCode>, to get all of the possible moves for a piece.
        We can simulate a slide in each direction, and only return the moves that move a distance of at least $1$.
        Finally, we can carry out this move after the neutron has moved.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="neutron/sol"/>
    </>
  );
};
