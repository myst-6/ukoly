import { Image, STitle, SText, SList, HStack, SCodeBlock } from "components";
import { brace } from "../../util";

export const Milk = () => {
  return (
    <>
      <STitle>Abridged Statement</STitle>
      <SText>
        You're given a connected graph of $h$ vertices ($1 \le h \le 2^{brace("12")}$), and the degree of each node
        does not exceed $3$. Furthermore, the degree of node $1$ does not exceed $2$. 
        To begin with, vertex $1$ is contaminated. At the beginning of each hour, you can 
        remove any node from the graph which is <b>not</b> contaminated. At the end of each hour, 
        the contamination will spread from each node to all nodes which are directly connected to it. 
        Output the minimum number of nodes which will be contaminated after an infinite amount of time, 
        if you remove nodes optimally.
      </SText>

      <STitle>Trapping Contamination: Path</STitle>
      <HStack alignItems="flex-start">
        <SText>
          Obviously the constraint on the degree of each node must be very important in solving
          the problem. Let's first consider a node in the graph with a degree of $2$ (that's not node $1$). 
          Consider any shortest path from the root to this node. For all nodes on this path, there is at 
          most $1$ node connected to it which is <b>off</b> the path. For the root, its degree is at most $2$, 
          and one of the nodes it's connected to will be next on the path. That's because its degree
          is at most $3$, and the previous and next nodes on the path are connected to it.
          For example, in the graph on the right let's consider the path $[1, 3, 5, 7]$. 
          At the start of the first hour, node $1$ is contaminated and we can cut off node $2$.
          At the start of the second hour, nodes $1$ and $3$ are contaminated and we can cut off node $6$.
          At the start of the third hour, nodes $1, 3$ and $5$ are contaminated and we can cut off node $8$.
          At the start of the four hour, nodes $1, 3, 5$ and $7$ are contaminated and we can cut off node $4$.
          Now the contamination cannot spread any further.
        </SText>
        <Image src="/assets/images/milk/path1.png" alt="Path to node of degree 2" height="20rem" />
      </HStack>

      <STitle>Trapping Contamination: Cycle</STitle>
      <HStack alignItems="flex-start">
        <SText>
          We know we can terminate a path once we hit a node of degree $2$. Is there any other case
          when we can terminate a path? Yes, we can continue a path until it intersects a node
          which we removed earlier. Once the path intersects this node, the contamination will once again 
          be trapped. In this example, the path intersects the node $7$ which was removed at the beginning
          of the second hour.
        </SText>
        <Image src="/assets/images/milk/path2.png" alt="Cycle" height="20rem" />
      </HStack>

      <STitle>Trapping Contamination: Root</STitle>
      <HStack alignItems="flex-start">
        <SText>
          One special case is that, if the degree of the root is less than $2$ then we can obviously
          block off the node connected to the root. 
        </SText>
      </HStack>

      <STitle>Solution</STitle>
      <SText>
        Let's write a modified BFS algorithm to find the shortest paths and detect cycles
        given a source. We will use a queue as normal. The modification we make is that, if we
        encounter a node and it's already visited, instead of ignoring it we will fire an event
        into a callback function. With this, the rest of the solution is easy enough. First, let's
        check for the special case at the root. Then, let's run a BFS from node $1$. For each node
        with a degree of $2$, we can consider the answer being the length of the path from the root
        to itself. For each node with a degree of $3$, we can run another BFS, and each time a cycle
        is detected when can consider the answer to be $d + x - 2$, where:
      </SText>
      <SList>
        <SText>
          $d$ is the length of the path from the root to the current node.
        </SText>
        <SText>
          $x$ is the length of the cycle.
        </SText>
        <SText>
          We subtract $2$ because the current node is counted twice, and the last node in the cycle
          is not contaminated. 
        </SText>
      </SList>

      <STitle>Code</STitle>
      <SCodeBlock path="milk/sol" />
    </>
  );
};