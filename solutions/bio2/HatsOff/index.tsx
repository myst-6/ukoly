import { SCodeBlock, SText, STitle } from "components";

export const HatsOff = () => {
  return (
    <>
      <STitle>Abridged Statement</STitle>
      <SText>
        All $2^c$ possible vectors of size $c$ containing only $-1$ and $1$
        are given to you. However, in each vector, some entries have been
        set to $0$ (in the input, this means turning the corresponding letter 
        upside-down). Find a non-empty subset of the vectors such that the sum 
        of the vectors in that subset is the zero vector.
      </SText>

      <STitle>Idea</STitle>
      <SText>
        Let's try to apply the pigeonhole principle. We will obtain an ordering
        of the inputs such that when we calculate prefix sums, all of them
        are vectors which only contain $0$ or $1$ in their entries. Since there
        are only $2^c$ unique $0/1$ vectors of length $c$ and $2^c + 1$ distinct
        prefix sums (if we include the empty prefix), there is guaranteed to be
        at least one repeated vector. 
      </SText>
      <SText>
        Let a pair of repeated prefix sums appear
        from a prefix of length $x$ and $y$. Then the answer will contain the entries
        from positions $x + 1$ to $y$ in the ordering, since the vector sum
        would be zero for the same prefix sum to repeat.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        What's left is to find the ordering - it turns out a simple greedy
        algorithm will work. Let's keep track of the current prefix sum - 
        originally, it will be the zero vector. On each iteration, let's consider
        the current prefix sum. It's guaranteed to be a $0/1$ vector by our defined
        invariant. So, let's attempt to use the vector in the input which originally
        contained $-1$s where the $1$s are right now, and originally contained $1$s
        where the $0$s are right now. It's clear to see that even if some of the
        entries have been set to zero, if we can use this input vector then the new 
        prefix sum will also be a $0/1$ vector.
      </SText>
      <SText>
        Obviously, if we've already used the vector then this algorithm fails.
        Here's the key insight: if the prefix sum repeats at any point, we've found
        the answer - otherwise, since the vector we're choosing on each operation
        is wholly dependent on the prefix sums and the current prefix sum is 
        guaranteed not to have appeared before, we definitely haven't used the
        sought vector before either. And by the pigenhole principle as explained above,
        this algorithm is determined above.
      </SText>

      <STitle>Implementation Detail: Encoding</STitle>
      <SText>
        We can arbitrarily assign either $u$ or $d$ to being $1$, and the other
        to be $-1$. Anyway, in the model code, I've assigned $u$ to be $1$ and $d$
        to be $-1$. Then, we can encode each input vector based upon what it 
        originally was before some entries were replaced with $0$, by considering 
        the binary equivalent of the vector after replacing all its $-1$
        with $0$. For example, the vector $[1, -1, -1, 1]$ may be encoded 
        into $1001_2 = 9$. Now the greedy algorithm is very simple to implement; you
        can refer to the code to see how it's done.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="hatsoff/sol" />
    </>
  );
};
