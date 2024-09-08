import { SCodeBlock, SSubtitle, SText, STitle, SCode } from "components";

export const AccordionPatience = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        From the small number of cards in a deck, we can see that it is feasible to simulate the game. 
      </SText>

      <STitle>Solution</STitle>
      <SText>
        For larger problems (often question $2$), it is useful to define a set of functions to carry out the operations in the game.
        For this problem, we can define a class <SCode>Game</SCode>, to store the piles of cards (the top card and the pile's size), and carry out each strategy.
      </SText>

      <SSubtitle>Shuffling</SSubtitle>
      <SText>
        In order to shuffle the cards, we can create a new output array, 
        and append the cards as specified by the problem statement. 
      </SText>

      <SSubtitle>Getting Moves</SSubtitle>
      <SText>
        For each pile, there are $2$ possible positions it can move to. 
        Due to this, we can iterate through each pile and check each of the possible positions.
        If the move is valid, we can add it to the list of moves, storing the start and end position of the pile.
        Finally, we can return the list of moves.
      </SText>

      <SSubtitle>Strategy $1$</SSubtitle>
      <SText>
        The first strategy involves maximising the index of the first and second pile. 
        To do this, we can get all the possible moves and sort them, primarily by the first pile index and secondarily by the second pile index.
        We can carry out the maximum move in the sorted list. 
      </SText>

      <SSubtitle>Strategy $2$</SSubtitle>
      <SText>
        This time, we can sort primarily by the sum of the first and second piles' sizes. 
        We can then carry out the maximum move in the sorted list.
      </SText>

      <SSubtitle>Strategy $3$</SSubtitle>
      <SText>
        Strategy $3$ relies on finding the number of valid moves in the next turn. 
        We can iterate through each move and find all of the moves that maximise the number of valid moves in the next turn.
        Now, the priority of each move is the same as strategy $1$, so we simply sort the list, and carry out the maximum move.
      </SText>

      <SSubtitle>Simulation</SSubtitle>
      <SText>
        Now we can simply simulate the game until there are no more valid moves, or the number of piles is $1$ (the game has been won).
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="accordionpatience/sol"/>
    </>
  );
};
