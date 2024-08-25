import {SCodeBlock, SText, STitle,  Link} from "components";
 import { brace } from "solutions/util";

 export const ScoopTwo = () => {
   return (
     <>
       <STitle>Abridged Statement</STitle>
       <SText>
         Given a tree of $v$ vertices, find the length of a minimal walk starting at any vertex, such that every vertex is visited at some point whilst the package is unlocked, and the package is locked whilst on every edge. There can be at most two locks on the package at any given time.

       </SText>

       <STitle>Observation</STitle>
       <SText>
         Using what was shown in Scoop! (part $1$), we know that we are required to minimise the expression $6E - 3h_i$, where $h_i$ is the height of the tree rooted at node $i$. In other words we want to find the maximum height of the tree, i.e. the maximum distance between any two nodes. This path is known as the diameter of the tree.
       </SText>

       <STitle>Solution </STitle>
       <SText>
         There exists a standard $\mathcal{brace("O")}(v)$ algorithm to find the diameter of a tree. Perform a DFS from any node, and then perform a DFS from the deepest node. The diameter of the tree is the path from the deepest node in the first DFS to the deepest node in the second DFS. So the depth of the second DFS is the length of the diameter of the tree. We can then evaluate $6E - 3d$. For a proof of this algorithm and further applications of the diameter, see <Link href="https://codeforces.com/blog/entry/101271#:~:text=A%20diameter%20of%20the%20tree,simple%20path%20a→b).">here</Link>.
       </SText>

       <STitle>Sample Explanation</STitle>
       <SText>
         In this case, the input is a tree with $3$ vertices and $2$ edges, with diameter $2$. The answer is thus $6 \cdot 2 - 3 \cdot 2 = 6$.
       </SText>
       <STitle>Code</STitle>
       <SCodeBlock path="scooptwo/sol" />
     </>
   );
 };
