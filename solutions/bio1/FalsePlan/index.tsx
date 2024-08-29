import { SCodeBlock, SList, SSubtitle, SText, STitle, Link } from "components";

export const FalsePlan = () => {
  return (
    <>
      <STitle>Observation</STitle>
      <SText>
        This problem has a recursive structure, in which we will be solving the same subprograms over and over again (how many plans are there given certain constraints on adjacency). Thus it seems sensible to use memoization and dynamic programming.
      </SText>

      <STitle>Idea</STitle>
      <SText>
        Lets break the problem into two separate tasks. Firstly, we want to be able to work out how many different false plans satisfy the given constraints and start with a certain prefix. Then we want to use these values to work out which false plan corresponds to a given index $n$, i.e. which prefixes are lexicographically before $n$ and which are after.
      </SText>

      <STitle>Solution</STitle>
      <SSubtitle>Finding the number of false plans with a given prefix</SSubtitle>
      <SText>
        Lets work on the first task. Note that the only influence the prefix has on identical adjacent letters is via the last contiguous block of identical letters. Since there is no inherent information in which letter is which (until we look at the next task when lexicographical order matters), we only need to store the length of the last contiguous block of identical letters, $b$, and the numbers of letters that need to be added to the prefix, $x$. Let $f(x, b)$ be the number of false plans starting with a prefix of last block length $b$ and length $r-x$. Now we break into three cases:
      </SText>
      <SList>
        <SText>If $b \gt q$, then there are no valid plans. </SText>
        <SText>Otherwise if $x = 0$, then there is one valid plan. </SText>
        <SText>Otherwise there are two cases: 
            <SList>
                <SText>The next letter is the same as the last letter of the prefix. In this case, there are $f(x - 1, b + 1)$ ways to continue</SText>
                <SText>The next letter is a different letter to the last letter of the prefix. In this case there are  $f(x - 1, 1)$ ways to continue</SText>
            </SList></SText>
            <SText>Thus overall $f(x, b) = f(x - 1, b + 1) + (p - 1) \cdot f(x - 1, 1)$</SText>
      </SList>
      <SText>
        We can now implement the first task directly using memoization.
      </SText>
      <SSubtitle>Finding the correct false plan</SSubtitle>
      <SText>
        We can now search for the false plan corresponding to index $n$ easily using the function $f(x, b)$. We'll consider each letter in turn. For each letter we'll go through all the possibilities alphabetically, taking the cumulative sum of the corresponding values of $f(x, b)$ as we go, until this becomes larger than $n$. This cumulative sum corresponds to the number of false plans which are lexicographically before the next prefix. This means that once we reach $n$, we will have just overshot the required position. Then we can roll back to the start of the last prefix, and then work on the next letter in the same fashion.
      </SText>
      <STitle>Commentary</STitle>
      <SText>
        It may be useful to think of the second part of the above solution as trying to walk down a decision tree to reach the desired leaf node, knowing the size of all subtrees. For another problem which can be solved in a very similar way see <Link href="https://ukoly.vercel.app/bio1?problem=Word+Game">BIO 2024 R1 Q3 (Word Game)</Link>.
      </SText> 
      <STitle>Code</STitle>
      <SCodeBlock path="falseplan/sol" />
    </>
  );
};
