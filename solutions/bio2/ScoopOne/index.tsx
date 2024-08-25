import { HStack, Image, SCodeBlock, SText, STitle, SList } from "components";
import { brace } from "solutions/util";

export const ScoopOne = () => {
  return (
    <>
      <STitle>Abridged Statement</STitle>
      <SText>
        Given a tree of $v$ vertices, find the length of a minimal walk starting at vertex $i$, such that every vertex is visited at some point whilst the package is unlocked, and the package is locked whilst on every edge. There can be at most two locks on the package at any given time.

      </SText>

      <STitle>Observation</STitle>
      <SText>
        Consider the simpler question of transferring the unlocked passage from village $i$ to village $j$ in minimal steps. Clearly the package must be immediately locked with lock $i$. Thus the package must return to $i$ later to be unlocked. Also, when the package arrives at $j$ for the last time, it must be locked with lock $j$ and no other locks. However, when the package arrives at $j$ for the first time, it will be locked with a different lock. However, lock $j$ will be able to be added. In summary we have four events that will take place
      </SText>
      <SList>
        <SText>
          The packaged is at $i$ unlocked, and lock $i$ gets added.
        </SText>
        <SText>
          The package is at $j$ locked with a lock other than $j$, and lock $j$ gets added
        </SText>
        <SText>
          The packaged is at $i$ locked with lock $i$ and $j$, and lock $i$ gets removed.
        </SText>
        <SText>
          The package is at $j$ locked with lock $j$, and lock $j$ gets removed.
        </SText>
      </SList>
      <SText>
        At this point it is evident that there is no need to use any lock other than locks $i$ and $j$. Between events $1$ and $2$ if another lock is added, it must be removed before event $2$, lock $i$ will need to be removed early, and the other lock will also need to be removed later. This is unnecessary and suboptimal. Between events $2$ and $3$ there is no room to add another lock. Between events $3$ and $4$ there is no need to add a lock, as the package is locked correctly with $j$. Thus the minimum total distance travelled is $d(i, j) + d(j, i) + d(i, j) = 3 d(i, j)$.
      </SText>
      
      <STitle>Reduction to a simpler problem</STitle>
      <SText>
        Let us name the messenger we have been considering so far "Rob". At this point, consider another messenger, Bob, traversing the village who can be trusted not to look at his package, so no locks are needed. We have shown that the Rob will take exactly $3$ times long as Bob to deliver the package to the villages in the same order. Thus the answer for Rob is $3$ times the answer for Bob, i.e. $3$ times the length of the shortest walk on the tree that visits every vertex. 
      </SText>
      <STitle>Solving the simpler problem </STitle>
      <SText>
        We now proceed to solve this simpler problem. Suppose that Bob lives in the starting node, node $i$. After taking the package through every node he returns home. Clearly Bob must walk on every edge of the graph, otherwise he will miss a node. Furthermore, Bob must walk on every edge of the graph at least twice, as if he walks down edge $p$ to $q$ only once, he will be stuck in the subtree of node $q$ and not able to return home. Moreover if Bob walks in the order of a DFS he can achieve this lower bound, walking on each edge exactly twice and returning home. Thus Bob can travel the minimum distance of $2E$. We have $\min$(distance to reach all vertices + distance from last vertex to home) $ = 2E$. So $\min$(distance to reach all vertices) = 2E - $\max$(distance from last vertex to home). Thus the answer to the simpler problem is $2E - h$ where $h$ is the height of the tree. 
      </SText>
      <HStack alignItems="flex-start">
      <Image src="/assets/images/scoopone/scoopexample.png" height="16rem" alt="Sample Diagram" />
      </HStack>
      <STitle>Solution </STitle>
      <SText>
        Combining the above we get that the answer is $6E - 3h$. $E$ is simply one less than $v$, as the graph is a tree. $h$ can be computed with a DFS in $\mathcal{brace("O")}(n)$.
      </SText>
     
      <STitle>Sample Explanation</STitle>
      <SText>
        In this case, the input is a tree with $2$ vertices, and $1$ edge, with height $1$. The answer is thus $6 * 1 - 3 * 1 = 3$.
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="scoopone/sol" />
    </>
  );
};
