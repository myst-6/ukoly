import { Link, SCodeBlock, SText, STitle } from "components";
import { BASE_URL } from "content";

export const Juggluging = () => {
    return (
        <>
            <STitle>Observation</STitle>
            <SText>
                Notice that the problem is asking for the shortest
                number of steps required to reach one of a set of
                states from a given state. This is a classic
                shortest path problem, which can be solved using
                breadth-first search (BFS).
            </SText>
            <STitle>Solution</STitle>
            <SText>
                Start the BFS from the initial state (when all
                jugs are empty). At each step, consider setting 
                each jug to its maximum capacity, emptying each
                jug, or pouring water from one jug to another.
                Keep track of visited states in a set to avoid
                revisiting the same state. When a state is reached 
                such that one of the jugs has the desired amount
                of water, return the number of steps taken to reach
                that state.
            </SText>
            <SText>
                When pouring water from one jug to another, the 
                easiest way to implement this (ensuring that no jug
                overflows and that the amount of water in each jug
                is non-negative) is to compute the amount of water that
                will be poured, considering the capacities of both 
                jugs, and only then update the amount of water in each
                jug.
            </SText>
            <SText>
                For more details, refer to the code below. If 
                you are not familiar with BFS, you can read more
                about it <Link href="https://usaco.guide/silver/graph-traversal?lang=cpp">here</Link>.
                For another BIO problem that can be solved using BFS,
                see <Link href={`${BASE_URL}/bio1?problem=Dreaming+Spires`}>BIO1 2023 Q3 - Dreaming Spires</Link>.
            </SText>
            <STitle>Code</STitle>
            <SCodeBlock path="juggluging/sol" />
        </>
    );
};
