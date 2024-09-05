import { SCode, SCodeBlock, SList, SText, STitle } from "components";
import { brace } from "../../util";

export const Raiders = () => {
  return (
    <>
      <STitle>Abridged Statement</STitle>
      <SText>
        There are $n + 2$ idols labelled from $0$ to $n + 1$, placed on pedestals.
        The $0$-th and the $(n + 1)$-th idol are on their correct pedestals.
        However, the idols from $1$ to $n$ are in a permutation of their original order.
        You can swap any idol with the one on the $0$-th of $(n + 1)$-th pedestal.
        However, you can only swap the idols between any given pair of pedestals one time.
        Output any series of swaps which will transform the given permutation to the
        identity permutation.
      </SText>

      <STitle>Cycle Decomposition</STitle>
      <SText>
        We can represent a permutation as a directed graph where there exists
        an edge $(p_i, i)$, for all $1 \le i \le n$. In such a graph, each node
        has exactly one outbound edge and one inbound edge. This means that each
        node is part of a cycle, and so we can decompose a permutation into a series
        of cycles.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        If we can solve for a permutation with a single cycle, then we can solve
        for all cycles independently. Let's say the nodes $v_1, v_2, \dots, v_k$ are
        the vertices in a cycle where the edge $(v_i, v_{brace("i + 1")})$
        exists for all $1 \le i \lt k$ and the edge $(v_k, v_1)$ exists.
        Let's first perform the following sequence of swaps:
      </SText>
      <SList>
        <SText>$(0, v_1)$</SText>
        <SText>$(0, v_2)$</SText>
        <SText>$\dots$</SText>
        <SText>$(0, v_k)$</SText>
      </SList>
      <SText>
        After this happens, all the idols in the cycle are in the correct position except one.
        The idol from $v_k$ is at pedestal $0$ when it's meant to be at position $v_1$. 
        Yet we can't swap pedestals $0$ with $v_1$ because we've already done this swap.
      </SText>
      <SText>
        To redemy this, let's perform the swap $(n + 1, v_k)$ before the above sequence.
        Now, at the end of the above sequence, the idol from $v_k$ is at pedestal $n + 1$
        when it's meant to be at position $v_1$. So, let's perform the swap $(n + 1, v_1)$.
        Now all the idols in the cycle are in the correct place, but the idols $0$ and
        $n + 1$ have been swapped around.
      </SText>
      <SText>
        Of course, for a single cycle we could fix this by swapping $(0, n + 1)$.
        However, we can't do this for each cycle because we can only swap between each
        pair of pedestals exactly once. Instead, it's lucky that if an even number of 
        cycles exist in the permutation then the idols $0$ and $n + 1$ will be swapped 
        an even number of times in total, and end up in the correct positions. After 
        all cycles have been fixed, the idols $0$ and $n + 1$ are the wrong way around
        only if there were an odd number of cycles. In this case, we can perform the 
        swap $(0, n + 1)$ exactly once, and with this, the idols have all been arranged 
        into their correct positions.
      </SText>

      <STitle>Implementation Detail</STitle>
      <SText>
        In the provided code, the cycles are identified, stored in a vector and
        then fixed one-by-one. Of course, the cycles can be fixed as they are identified,
        resulting in very little memory usage. However, if you decide to implement it
        in the former way, you may run into memory limit issues.
      </SText>
      <SText>
        It turns out that each vector has a fixed memory overhead aside from the 
        data that they store. It means that $n$ vectors of size $1$ use significantly
        more memory than a single vector of size $n$. I believe this to be around 
        $3$ times as much memory, for a <SCode>vector&lt;int&gt;</SCode>.
      </SText>
      <SText>
        To fix the memory issue you can simply ignore storing any cycle of length $1$, 
        since this represents an idol which is already in the correct position.
        This significantly reduces the memory usage from the fixed overhead of small
        vectors.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="raiders/sol" />
    </>
  );
};