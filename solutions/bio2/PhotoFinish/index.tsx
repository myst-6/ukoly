import { SCodeBlock, SText, STitle, SList } from "components";
import { brace } from "solutions/util";

export const PhotoFinish = () => {
  return (
    <>
      <STitle>Abridged Statement</STitle>
      <SText>
        Starting from an array of pidgeons numbered from 1 to $n$ arranged in order, an infinite sequence of pigeon permutations is produced by pigeons swapping with adjacent pigeons according to the following procedure: 
        pigeon $n$ is gradually moved to the far end, followed by the other pigeons performing the swap they would have performed if pigeon $n$ was not present.
      </SText>
      <SText>
        The swap that takes place depends entirely on the current permutation of birds.
      </SText>
      <SText>
        As input, you are given an integer $n$ and in a new line a permutation of numbers $1$ to $n$ indicating a line-up of pigeons.
      </SText>
      <SText>
        Perform a swap on the input permutation according to the procedure and output the new permutation.
      </SText>
      <STitle>Solution</STitle>
      <SText>
        Let $v$ be a permutation of integers in the range $[1, n]$.
        Let $u$ be a subsequence of $v$ consisting of integers in the range $[1, n - 1]$.
        Let $F(v)$ be the function that carries out the next swap on a permutation $v$ of integers in the range $[1, n]$.
      </SText>
      <SText>
        Inside $F(v)$, one of two operations can take place:
        <SList numbered={true}>
          <SText>
            $n$ is moved to the far end (how to calculate which end it should move towards is explained later)
          </SText>
          <SText>
            $n$ is removed from $v$, $F(v)$ is called on what remains (which is essentially $u$), and $n$ is re-inserted at its previous position.
          </SText>
        </SList>
      </SText>
      <SText>
        Looking at the problem statement's example sequence on the left, where $n = 4$, it seems that the position towards which the element $n$ moves with each swap alternates with each swap in $u$.
      </SText>
      <SText>
        For example:
        <SList>
          <SText>
          When $u = [1, 2, 3]$, the element $n$ moves towards index $0$
          </SText>
          <SText>
          When $u = [1, 3, 2]$, the element $n$ moves towards index $n - 1$,
          </SText>
          <SText>
          When $u = [3, 1, 2]$, the element $n$ moves towards index $0$,
          </SText>
          <SText>
          When $u = [3, 2, 1]$, the element $n$ moves towards index $n - 1$, $\\\\...$
          </SText>
        </SList>
      </SText>
      <SText>
        Moreover, according to the problem statement, the sequence of permutations of integers in the range $[1, 3]$ would be 
        $[1, 2, 3], [1, 3, 2], [3, 1, 2], [3, 2, 1], ...$ 
      </SText>
      <SText>
        There is a clear pattern here. Let $S_n$ be the sequence of permutations of integers in ${brace("[")}1, n{brace("]")}$ generated according to the given procedure (this sequence has a period of $n!$ so we need only consider the first $n!$ elements).
      </SText>
      <SText>
        The element $n$ in a permutation $v$ will be moved towards index 0 if $u$ has an even zero-indexed position in $S_{brace("n - 1")}$, and index $n - 1$ if its position is odd.
      </SText>
      <SText>
        If the element $n$ is already at its destination index in $v$, then $F(u)$ is called.
      </SText>
      <SText>
        For example, when $v = [1, 2, 3, 4]$, $u = [1, 2, 3]$, which has an even index of $0$ in $S_3$, and so $4$ is moved towards index $0$ with each swap. When $v = [4, 1, 2, 3]$, the element $4$ is already at index $0$ so the next swap takes place in $u$.
      </SText>
      <SText>
        Now all that's left is to find a way to determine if a permutation $v$ has an even index in $S_n$.
      </SText>
      <SText>
        Let's look again at the example sequence $S_4$ in the problem statement. The permutations with an even index are $[1, 2, 3, 4], [1, 4, 2, 3], [4, 1, 3, 2], [1, 3, 4, 2], [3, 1, 2, 4], [3, 4, 1, 2], ...$. If we were to group these by the subsequence of integers in the range $[1, 3]$, we would get the following list: 
      </SText>
      <SList>
        <SText>
          $[1, 2, 3]$: $[1, 2, 3, 4]$, $[1, 4, 2, 3]$
        </SText>
        <SText>
          $[1, 3, 2]$: $[4, 1, 3, 2]$, $[1, 3, 4, 2]$
        </SText>
        <SText>
          $[3, 1, 2]$: $[3, 1, 2, 4]$, $[3, 4, 1, 2]$
        </SText>
        <SText>
          $[3, 2, 1]$: $[4, 3, 2, 1]$, $[3, 2, 4, 1]$
        </SText>
      </SList>
      <SText>
        $[1, 2, 3]$ and $[3, 1, 2]$ have an even position in $S_3$ and $[1, 3, 2]$ and $[3, 2, 1]$ have an odd position.
      </SText>
      <SText>
        There is another pattern: for all the permutations at an even index in $S_4$ if the subsequence has an even position in $S_3$ then the element $4$ is an even number of positions from the end of the permutation. If the subsequence has an odd position, then the element $4$ is an odd number of positions from the end.
      </SText>
      <SText>
        This can be generalised into a simple recursive function for any permutation in $S_n$:
      </SText>
      <SText>
      Let $E(v)$ be a function that returns true if $v$ has an even position in $S_n$. Let $evenDist(v)$ be a function that returns true if the distance of the largest element in $v$ ($n$) is an even number of positions away from the end of $v$.
      </SText>
      <SText>
        $E(v) = ¬(evenDist(v) \oplus E(u))$
      </SText>
      <SText>
        ($¬$ is the logical NOT operator and $\oplus$ is logical XOR)
      </SText>
      <SText>
        This solution has a space-time complexity of $\mathcal{brace("{O}")}(n^2)$, which is fast enough given that $2 \leq n \leq 1024$
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="photofinish/sol" />
    </>
  );
};
