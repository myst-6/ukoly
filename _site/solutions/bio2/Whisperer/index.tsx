import { Link, SCode, SCodeBlock, SList, SText, STitle } from "components";
import { brace, op } from "../../util";

export const Whisperer = () => {
  return (
    <>
      <STitle>Abridged Statement</STitle>
      <SText>
        We're given a list $a$ of $p$ non-negative integers.
        In one operation, we do the following:
      </SText>
      <SList>
        <SText>
          Choose an index $i$ ($1 \le i \le p$).
        </SText>
        <SText>
          Swap $a_i$ and $a_{brace("(i \\mod p) + 1")}$.
        </SText>
        <SText>
          Increase $a_i$ by $1$ and decrease $a_{brace("(i \\mod p) + 1")}$ by $1$.
        </SText>
      </SList>
      <SText>
        Take all sequences of operations which transform the list into a list of equal numbers,
        and consider only those with minimum length. Sort them lexicographically based upon the list 
        of indices which they operate on, and output the $n$-th sequence in the list.
      </SText>

      <STitle>Simple Observation</STitle>
      <SText>
        Each operation does not affect the total sum of the integers. Therefore, the number
        which all of the list is equal to at the end is the mean of the list. Let's call this
        number $x$.
      </SText>

      <STitle>Lexicographical Sequences</STitle>
      <SText>
        Whenever we have a question about returning the $n$-th lexicographical sequence, a common idea is 
        to have a way of counting the number of sequences beginning with a certain prefix.
        If we have this, we can build the sequence one entry at a time. Let's say we currently know
        the prefix of length $k$ of the $n$-th sequence, and we know how many sequences are smaller than
        the current prefix (i.e., how many we 'skipped' over). We can count how many sequences 
        begin with all possible prefixes of length $k + 1$ by iterating through the possibilities for the next 
        entry to add onto the current prefix. If the number of sequences beginning with the new prefix of 
        length $k + 1$ is at least $n$ minus the number of sequences we've skipped, we know that the sequence
        must begin with the new prefix of length $k + 1$. Otherwise, we can choose to skip all of these sequences
        and try the next lexicographically larger entry. By continuing this process until the number of skipped
        sequences is exactly $n - 1$, we can build the $n$-th sequence.
      </SText>

      <STitle>Counting: Brute Force</STitle>
      <SText>
        It remains to figure out how to count the number of minimum sequences with a given prefix.
        Since the constraints on $p$ are small, it makes sense to try a brute-force. 
        The idea is to contruct a graph where the nodes are the lists of integers, and edges connect
        two sequences if we can perform exactly one operation to transform one into the other.
        Let's say we've constructed this graph. We can run BFS on this graph to find the length
        of the minimum sequence, and we can also use BFS to count the number of paths to the end from a 
        given node. To count the number of paths to the end, we can simply do 
        ${op("dp")}_u = \sum{op("dp")}_v$, for all nodes $v$ such that ${op("dist")}_v = {op("dist")}_u + 1$. 
        Note: the graph containing only the nodes in shortest paths to the end, and only the edges $(u, v)$
        such that ${op("dist")}_v = {op("dist")}_u + 1$ is called the level graph.
      </SText>

      <STitle>Limits</STitle>
      <SText>
        Whenever we swap two items, we need to ensure that no counters go negative.
        To check this, we should ensure that $a_i \neq 0$ before choosing index $i$.
        We can estimate the number of nodes currently in our graph by writing a program.
        The number of nodes in the graph will be bounded by the number of lists containing $p$ 
        non-negative integers whose sum is the same as the given list.
      </SText>
      <SCodeBlock path="whisperer/count1" />
      <SText>
        This is maximised when $p = 10$ and $\sum = 90$, and gives $\approx 1.731 \cdot 10^{brace("12")}$.
        Even though the true number of states explored is likely to be a lot less than this, the order of
        magnitude is way too high. We need something on the order of magnitude $\approx 10^8$, ideally.
      </SText>

      <STitle>Key Observation</STitle>
      <SText>
        In fact, not only does the input satisfy this condition, but all nodes on the level graph will 
        also have $a_i &lt; p$. This can be easily guessed and seems intuitive, and is very easy to implement.
        Unfortunately I don't have a proof for this right now, but hopefully somebody can contribute
        one in the near future. Now let's run another program to see how many states we have.
      </SText>
      <SCodeBlock path="whisperer/count2" />
      <SText>
        In the worst case when $p = 10$ this code outputs $\approx 3.74 \cdot 10^8$, which is 
        probably good enough. However, because it's quite close to the upper limit, we need to perform 
        one more optimisation to let our code pass.
      </SText>

      <STitle>Encoding</STitle>
      <SText>
        Instead of representing each node by an <SCode>std::array</SCode> or <SCode>std::vector</SCode> or similar,
        we can represent each node in a single integer by doing something similar to
        <Link href="https://cp-algorithms.com/string/string-hashing.html">polynomial hashing</Link>.
        In this case, $p$ is small so we don't need to take any modulus. We can use any base as long as it 
        fits in a <SCode>long long</SCode>. We can perform operations quickly by using the encoded number and 
        we've removed at least one $p$ factor from the runtime of the code.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="whisperer/sol"  />
    </>
  );
};
