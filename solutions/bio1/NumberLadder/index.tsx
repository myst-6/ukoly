import { SCodeBlock, SText, STitle, Link } from "components";
import { brace } from "solutions/util";

export const NumberLadder = () => {
    return (
        <>
            <STitle>Idea</STitle>
            <SText>
                Since this problem is asking for the shortest number
                ladder between two numbers, it is equivalent
                to finding the shortest path between two nodes in an
                undirected, unweighted graph. Therefore, we can use
                breadth-first search (BFS) to solve this problem.
                However, there is a small catch. Notice that
                from each number, we need to try to move to
                all other possible numbers. There are $999$ possibilities
                for each node, so the runtime of this will blow up very fast.
            </SText>
            <STitle>Solution</STitle>
            <SText>
                Just precompute the graph. Since there are only $1000$ nodes,
                we can afford to create the graph in $\mathcal{brace("O")}(n^2)$. time.
                To do this,
                first precompute the count of each letter in the representation
                of each number. Then, create an empty adjacency list, which is a
                list of lists, where the $i$th list contains all the numbers
                that can be reached from number $i$. Now, iterate through all
                pairs $(i, j)$ of numbers, and if the difference between the counts of
                each letter in the representations of $i$ and $j$ is less than $5$,
                add an edge between the two numbers. To do this, append $j$ to the
                $i$-th list in the adjacency list, and append $i$ to the $j$-th list.
            </SText>
            <SText>
                Now, once this graph is created, we can run BFS on it and
                comfortably pass the constraints.
            </SText>
            <SText>
                For more details, refer to the code below. If
                you are not familiar with BFS, you can read more
                about it <Link href="https://usaco.guide/silver/graph-traversal?lang=cpp">here</Link>.
                For another BIO problem that can be solved using BFS,
                see <Link href="https://ukoly.vercel.app/bio1?problem=Dreaming+Spires">BIO1 2023 Q3 - Dreaming Spires</Link>.
            </SText>

            <STitle>Code</STitle>
            <SCodeBlock path="numberladder/sol" />
        </>
    );
};
