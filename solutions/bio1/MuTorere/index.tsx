import { SCodeBlock, SText, STitle, SCode, SSubtitle } from "components";

export const MuTorere = () => {
    return (
        <>
            <STitle>Idea</STitle>
            <SText>
                Like a lot of BIO1 Q2 problems, this problem involves
                carefully reading the problem statement and implementing
                exactly what is asked for. We can see that to solve the
                $n$ command, we can just make a move exactly as
                described in the problem statement, but it is not
                immediately clear how to solve the $r$ command.
            </SText>
            <STitle>Solution</STitle>
            <SSubtitle>Dealing with the $r$ command</SSubtitle>
            <SText>
                Notice that the game only has $9$ circles - the
                "putahi" and the $8$ "kawai". Each circle can be in one of $3$ states:
                $E$ (empty), $O$ (occupied by player $1$) or $X$ (occupied by player $2$).
                Also, notice that there must be exactly one $E$, $4$ $O$s and $4$ $X$s
                in a game state. Therefore, the number of possible game states
                is $9 \choose 1$$\cdot$$8 \choose 4$$=630$. However, we must
                multiply this by $2$ to account for the fact that for each game
                state, it could be player $1$'s turn or player $2$'s turn.
                Therefore, there are $1260$ possible game states, from which it
                follows that, by the pigeonhole principle, the result of the game
                is evident after at most $1260$ moves. Therefore, it is
                clear that when the $r$ command is run, we can just keep simulating
                the game until either a previous game state is reached, or the game
                ends. If a previous game state is reached, it is clear that the result
                will be a draw, because an infinite loop has been reached.
            </SText>
            <SSubtitle>Representing the game states</SSubtitle>
            <SText>
                In implementation questions like this, it is often useful to
                use object-oriented programming. We define a class <SCode>Board</SCode>,
                which represents a game state, and it has two attributes:
                <SCode>chars</SCode> and <SCode>current_turn</SCode>. The variable
                <SCode>chars</SCode> is a string of length $9$, which stores the
                board state in the form of the input, and <SCode>current_turn</SCode>
                is an integer which stores whose turn it is. A neat trick when
                <SCode>current_turn</SCode> is either $1$ or $2$ is to use
                <SCode>current_turn = 3 - current_turn</SCode> to flip the
                current turn.
            </SText>
            <SSubtitle>
                Making a move
            </SSubtitle>
            <SText>
                When figuring out the best move to make, we need to use a
                recursive function with maximum depth $2$. This is to account
                for rule $2$ in the problem statement, which states that
                a player must avoid making a move which results in the
                other player being able to make a move which results in
                a win for them. Therefore, the solution is to generate 
                a list of candidate moves. This will be a list of integers,
                where each integer represents a token that can move. Then,
                for each candidate, see if it leads to the other player instantly 
                losing (i.e. the other player has no valid moves). If it does,
                then the current player wins, so we should return that move.
                Then, for each move, we should simulate the game state after 
                making that move, and then recursively call the function
                with the new game state and a depth of $1$. If the recursive
                call returns a loss for the current player, then we should not
                make that move, because the other player can force a win.
                Otherwise, we should make that move. If all moves result in
                a loss for the current player, then we should make the leftmost 
                move in the list of candidates.
            </SText>
            <SSubtitle>
                Simulating the rest of the game using the $r$ command
            </SSubtitle>
            <SText>
                Start by creating a copy of the current game state, and create 
                an empty set <SCode>visited</SCode>. Now, make a move from the 
                current game state and check if the new game state is in the set,
                if it is, then the game is a draw. Otherwise, add the new game state
                to the set and continue making moves. If the game ends, then the
                result is the result of the game. 
            </SText>
            <SText>
                However, there is one small detail that we need to account for.
                Since we are using class instances to represent game states, we
                cannot simply add them to a set. This is because the default
                implementation of the <SCode>__hash__</SCode> function for classes
                is to return the memory address of the object, which means that 
                two different <SCode>Board</SCode> class instances representing 
                the same game state will have different hash values, and therefore 
                will not be considered equal when added to a set. To fix this, instead 
                of directly adding the <SCode>Board</SCode> instance to the set, we
                can make a new string, which is the concatenation of the 
                two attributes of the <SCode>Board</SCode> instance, and add that
                to the set instead. This guarantees that two different <SCode>Board</SCode>
                instances representing the same game state will have the same hash value.
            </SText>

            <STitle>Code</STitle>
            <SCodeBlock path="mutorere/sol" />
        </>
    );
};
