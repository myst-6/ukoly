import { Link, SCodeBlock, SText, STitle } from "components";

export const WindowDressing = () => {
  return (
    <>
      <STitle>Observation</STitle>
      <SText>
        This problem asks for the smallest number of 
        operations to get from one state to another. 
        How else can this problem be represented?
      </SText>
      <STitle>Solution</STitle>
      <SText>
        This problem can be represented as a graph, 
        where each node is a state, and each edge is 
        an operation. The problem then asks for the 
        shortest path from the node representing 
        the empty string, to the node representing
        the input. This can be solved with a BFS.
      </SText>
      <SText>
        To code this BFS, put the empty string in a queue with distance 0,
        and then repeatedly pop the front of the queue,
        and try each of the three operations on it. 
        Then, if the resulting string is not in the set of
        visited strings, add it to the queue with distance 
        $d+1$, where $d$ is the distance to the node being processed,
        and the set of visited strings. Continue this process until the
        front of the queue is the input string.
      </SText>
      <SText>
        There are many BFS problems in BIO Round 1, so it is
        important to get confident implementing 
        this algorithm quickly. A very similar problem 
        is "Dreaming Spires", BIO 2023 R1 Q3.
      </SText>
      <SText>
        This editorial was a brief explanation of BFS in the context of this problem. For a more rigorous coverage, visit<Link href="https://usaco.guide/silver/graph-traversal?lang=cpp">this USACO Guide page</Link>.
      </SText>
      <SCodeBlock path="dreamingspires/sol" />
      <STitle>Code</STitle>
      <SCodeBlock path="windowdressing/sol" />
    </>
  );
};