import { SCodeBlock, SText, STitle, Link } from "components";

export const EenieMeenieMaineeMo = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Let's first notice the small constraint on $n$ and $words$. 
        From this we can see that we can brute force the solution.
      </SText>
      
      <STitle>Solution 1</STitle>
      <SText>
        We can simply maintain a list of all the players in the game. 
        Every turn, we can increment the index the friends are pointing at (initially $0$) by $k$,
        and remove the player at that index. We can repeat this process until we have only one player left.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="eeniemeeniemaineemo/sol1"/>

      <STitle>Solution 2</STitle>
      <SText>
        However, we can optimize this solution by using dynamic programming. 
        We can notice that to solve the problem where $n = 7$ and $words = 3$, we can simply remove a player, 
        and then we are solving the problem where $n = 6$ and $words = 3$.
        We also should take into account that all the players positions have been shifted by $words$. 
        This gives a natural recursive solution: $f(n, words) = (f(n-1, words) + words) \mod n$,
        where $f(1, words) = 0$ (0-indexed).
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="eeniemeeniemaineemo/sol2"/>

      <STitle>Solution 3</STitle>
      <SText>
        However, we can notice that we don't even need recursion, and we can solve this problem iteratively,
        using a bottom-up approach. 
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="eeniemeeniemaineemo/sol3"/>

      <SText>
        This problem is the same as <Link href="https://cses.fi/problemset/task/2163">this CSES problem</Link>
      </SText>
    </>
  );
};
