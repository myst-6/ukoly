import { SCodeBlock, SText, STitle } from "components";
import { brace } from "solutions";

export const Drats = () => {
    return (
        <>
            <STitle>Observation</STitle>
            <SText>
                When one drat is thrown, the problem reduces to 
                finding the number of ways to score $s-x$ points 
                with $d-1$ drats, where $s$ is the required score,
                $d$ is the number of drats, and $x$ is the score 
                of the drat that was thrown. What does this indicate 
                about the solution?
            </SText>
            <STitle>Solution</STitle>
            <SText>
                Use dynamic programming (DP) to solve the problem.
                Let $dp[i][j]$ be the number of ways to score $j$
                points with $i$ drats. Our base case is $dp[i][2x] = 1$,
                for all $x$ from $1$ to $20$. This represents the 
                first drat thrown, whose value is doubled. 
                Then, we can fill out the DP table by iterating through
                all possible values of $i$ and $j$, and for each cell,
                we can iterate through all possible values of the
                last drat thrown, and add the number of ways to score
                $j-x$ points with $i-1$ drats to the current cell, 
                where $x$ is the value of the last drat thrown.
            </SText>
            <SText>
                The final answer is $dp[d][s]$, where $s$ is the
                required score and $d$ is the number of drats.
            </SText>
            <SCodeBlock path="drats/sol" />
        </>
    );
};