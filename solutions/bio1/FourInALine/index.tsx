import { SCode, SCodeBlock, SText, STitle } from "components";

export const FourInALine = () => {
    return (
        <>
            <STitle>Solution</STitle>
            <SText>
                Like a large number of BIO1 Q2 problems, this 
                is an exercise in doing exactly what the problem
                statement says.
            </SText>
            <SText>
                A very simple way to implement this is using 
                a class <SCode>Board</SCode>, which stores a 
                2D array of the current board state, and an 
                integer <SCode>current_turn</SCode> which stores
                a number: $1$ if it is player $1$'s turn, and
                $2$ if it is player $2$'s turn. Then, we can 
                very easily implement the <SCode>get_winner</SCode> method, 
                which checks for a horizontal, vertical or 
                diagonal line of $4$ in a row.
            </SText>
            <SText>
                The <SCode>play_move</SCode> method takes in a 
                number <SCode>column</SCode> and places the current player's
                piece in the lowest empty row in that column. It then
                flips the <SCode>current_turn</SCode> variable. It is 
                important to note that the <SCode>play_move</SCode> method
                creates a new board object, rather than modifying the
                current board object. This is because we want to be able
                to simulate the game without actually changing the board.
                This method is called at the beginning of the program, 
                when an empty board is created, and the question 
                asks us to simulate the first $n$ moves of the game.
            </SText>
            <SText>
                To implement the  <SCode>simulate_one</SCode> method,
                we need repeatedly create a new board object, and
                try to play all possible moves. If a move results in a
                board state where <SCode>get_winner</SCode> returns the 
                current player, then we return the board state at that
                moment, because this means that the current player wins by 
                making this move. If no such move exists, we create a new board object
                with the exact same board state as the current board state,
                but with the <SCode>current_turn</SCode> variable flipped.
                This way, we can check each possible move for the other player 
                in the current scenario, and if any move results in a win for the 
                other player, we need to make this move, so that on the next turn, 
                the other player cannot make this move and win. This implements 
                rule $2$ of the problem statement. If no such move exists, 
                we return a copy of the current board state with the leftmost 
                valid move made.
            </SText>
            <SText>
                The <SCode>simulate_all</SCode> method simply calls 
                the <SCode>simulate_one</SCode> method repeatedly until 
                the game is over, and returns the final board state. 
            </SText>

            <STitle>Code</STitle>
            <SCodeBlock path="fourinaline/sol" />
        </>
    );
};
