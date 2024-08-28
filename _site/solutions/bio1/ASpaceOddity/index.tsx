import { Link, SCodeBlock, SText, STitle } from "components";

export const ASpaceOddity = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        The problem needs to be represented as a graph,
        where each node is a state. The states can be 
        represented as an array of $n+1$ booleans, where
        the first $n$ booleans represent the position of
        the astronauts, and the last boolean represents
        the position of the oxygen tank. This way, the
        answer is equal to the shortest path from the
        initial state $[0, 0, \ldots, 0]$ (where each 
        astronaut and the oxygen tank is located inside
        the pod), to the final state $[1, 1, \ldots, 1]$ 
        (where each astronaut and the oxygen tank is
        in the station). An edge exists between two states
        if and only if it is possible to move from one
        state to the other in one move. In this case, 
        this means that the oxygen tank must move from
        one side to the other, as well as $1$ or $2$
        astronauts. The weight of the edge is the maximum
        of the travelling times of the astronauts that had to 
        move to get from one state to the other. Also,
        it is clear that these edges are undirected, because 
        if it is possible to move from state $A$ to state
        $B$, then it is possible to move from state $B$ to
        state $A$ as well, by moving the same astronauts
        and the oxygen tank the other way.
      </SText>
      <SText>
        Therefore, this problem can formally be 
        redefined as finding the shortest path from
        one node to another in a weighted, undirected
        graph. 
      </SText>
      <STitle>Solution</STitle>
      <SText>
        Fortunately, there exists a well-known algorithm
        that solves this problem: Dijkstra's algorithm.
        It is a greedy algorithm that finds the shortest 
        path from a starting node to all other nodes in
        a graph. The algorithm works by maintaining a
        priority queue of nodes, where the node with the
        smallest distance from the starting node is
        removed from the queue and for each neighbour of
        the node, the distance to the neighbour is updated
        if the distance to the neighbour through the 
        current node is smaller than the previously 
        determined distance to the neighbour. See the
        {<Link href="https://usaco.guide/gold/shortest-paths?lang=cpp#mathcalomlog-n">USACO Guide</Link>} page
        for more information on Dijkstra's algorithm, as 
        well as a set of problems to practice on.
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="aspaceoddity/sol"/>
    </>
  );
};
