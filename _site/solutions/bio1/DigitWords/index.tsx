import { Link, SCodeBlock, SText, STitle } from "components";

export const DigitWords = () => {
  return (
    <>
      <STitle>Solution</STitle>
      <SText>
        This problem is simple - just do exactly what 
        the problem asks you to do. The easiest implementation 
        is to consider each digit and its corresponding word
        separately. For each letter in the input string, try to 
        match it with the current character in the digit word,
        and if matches, move on to the next character in the digit word.
        If the digit word is fully matched (we have found corresponding 
        characters for all the digits), we output the number 
        corresponding to the digit word and exit the program. Otherwise, we continue to the next
        digit word. If we have gone through all the digit words
        and none of them have matched, we output $NO$. 
      </SText>
      <SText>
        This is a very simple example of a greedy algorithm. 
        This is because we are always choosing the best possible
        option at each step, and we are never backtracking. 
        Greedy algorithms are often used in competitive programming
        because they are simple to implement and often have a
        good enough time complexity to pass the constraints of
        the problem, however they are not always correct. In this case,
        however, the proof is simple - if we are currently trying to 
        match the $i$-th character of the digit word, then it is better 
        to match it with the earliest possible character in the input string.
        This is because if we match it with a later character, then we
        may not be able to match the next character in the digit word
        because it may have already been skipped.
      </SText>
      <SText>
        For example, consider the input string $ONOEN$. The objective 
        is to match the digit word $ONE$ to the input string. If we
        match the $O$ in the digit word with the $O$ at position $1$,
        we will be able to match the $N$ at position $2$, and then 
        the $E$ at position $4$. However, if we try to match the $O$ 
        with position $3$, we will not be able to use the $N$ at position $2$
        anymore, so we will have to use the $N$ at position $5$, which leaves 
        us with no $E$ to match.
      </SText>
      <SText>
        This editorial was a brief explanation of a greedy algorithm 
        in the context of this problem. For a more rigorous coverage,
        visit<Link href="https://usaco.guide/bronze/intro-greedy?lang=cpp">this USACO Guide page</Link>.
      </SText>
      <SCodeBlock path="digitwords/sol" />
    </>
  );
};
