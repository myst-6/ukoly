import { SCodeBlock, SText, STitle, SCode, SList } from "components";

export const PlayingGames = () => {
  return (
    <>
      <STitle>Observation</STitle>
      <SText>
        Given the first two dice, you can generate the entire distribution.
        Given the first die of the second pair, you can determine whether the dice will produce an identical distribution, and if so, you can find the last die.
      </SText>
      <STitle>Brute Force Solution</STitle>
      <SText>
        Let the input dice be $A$ and $B$, and the output dice be $C$ and $D$.
        We begin by producing the distribution of $A$ and $B$.
        Pairwise add each face of $A$ to each face of $B$, and then store them in a container - I used a <SCode>Counter</SCode>.
        We brute force over all possible $C$ using Python's <SCode> itertools.combinations_with_replacement </SCode> function, or an equivalent implementation in another language.
        We then iterate to generate each element of $D$. This takes $n$ steps.
      </SText>
      <SText>At the $i$-th step:</SText>
      <SList>
        <SText>Pop the smallest element from the distribution.</SText>
        <SText>The $i$-th element of $D$ is this element minus the smallest face of $C$.</SText>
        <SText>If this is less than $1$, we can early return as all dice faces must be $\ge 1$</SText>
        <SText>For the remaining elements of $C$, check if adding them to the $i$-th element of $D$ provides a valid value from the distribution and pop it.</SText>
        <SText>If this value was not in the distribution, we can do another early return.</SText>
      </SList>
      <SText>
        If no early returns happened, check that $C$ is not equal to $A$ or $B$, as these are not valid.
        If so, print $C$ and $D$ and terminate the program.
        If an early return has happened - continue with the next value of $C$.
        If every possible $C$ has been tested, then it is impossible.
      </SText>
  
      <STitle>Code</STitle>
      <SCodeBlock path="playinggames/sol"/>
    </>
  );
};
