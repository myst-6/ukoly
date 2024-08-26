import { SCodeBlock, SText, STitle } from "components";


export const Byway = () => {
  return (
    <>
      <STitle>Abridged Statement</STitle>
      <SText>
        You are given an undirected, weighted graph,
        and you need to find the shortest path from node 
        $1$ to node $v$, such that you halve the weight of 
        exactly one edge in the graph.
      </SText>

      <STitle>Observation</STitle>
      <SText>
        Simply halving each edge and running Dijkstra's algorithm
        for every edge will not work, because this is too slow given the 
        constraints. However, we can use the property of Dijkstra's
        algorithm that it finds the shortest path from a source 
        to all other nodes.
      </SText>
      <STitle>Solution</STitle>
      <SText>
        Run Dijkstra's algorithm starting at node $1$, and 
        then again starting at node $v$. Now enumerate all 
        the edges in the graph, and for each edge, simulate halving 
        its weight, reaching one end of the edge from node $1$ and the other
        end from node $v$, and then doing the opposite. This 
        results in an $O(E \log V)$ solution, where $E$ is the number
        of edges and $V$ is the number of vertices, which is the 
        same complexity as Dijkstra's algorithm.
      </SText>
      <SText>
        For more information on Dijkstra's algorithm, see 
        the editorial for "A Space Oddity", BIO 2001 R1 Q3. 
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="byway/sol" />
    </>
  );
};
