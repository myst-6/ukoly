import { Link, SCodeBlock, SText, STitle, SCode } from "components";

export const DreamingSpires = () => {
  return (
    <>
      <STitle>Solution</STitle>
      <SText>
        The minimum number of moves between the start and the end state can be computed with a common graph traversal technique called <i>breadth-first search</i> (BFS).
        In this case, the nodes are all the possible game states and two nodes are connected if it is possible to reach one from the other within one move.
      </SText>
      <SText>
        With a BFS algorithm, we add the initial state to a queue.
        The state is popped from the front of the queue and each of its neighbouring states are calculated by carrying out every possible move on the current state and pushing the new state to the queue.
        The next state is then popped from the queue and the cycle repeats. The loop ends when the finishing state is popped from the queue.
      </SText>
      <SText>
        A queue is used so that states are traversed in the order in which they are inserted into the queue, ensuring that all states $1$ move away from the start state are traversed before the states $2$ moves away from the start, 
        and $2$ moves away before $3$, and so on. Therefore, the first time we encounter the finishing state at the front of the queue, we know that it was reached by carrying out the minimum number of moves.
      </SText>
      <SText>
        To keep track of how many moves it took to reach the current state, a <SCode>dist</SCode> variable can be added alongside the state when it is pushed to the queue. That variable is incremented by $1$ when each move is carried out to get the neighbouring states.
        In the sample code, this was achieved by making the BFS queue a queue of <SCode>std::pair</SCode> structures, which store the state and <SCode>dist</SCode>. Once the finish state is encountered, the minimum number of moves is the accompanying <SCode>dist</SCode> variable.
      </SText>
      <SText>
        A key observation is that if you can go from one state to another state by moving a ball from peg $A$ to peg $B$, then you can go back to the original state by moving a ball from peg $B$ to peg $A$. This poses an issue
        for our BFS algorithm, as it could cause an infinite loop where a neighbour state is added to the BFS queue when a state is traversed, and the original is added when neighbouring state is traversed.
      </SText>
      <SText>
        This can be prevented by keeping a store of which states have been traversed already, and checking if the state popped from the queue is present. If so, the current state is dropped and the next element is popped from the queue.
        In the sample code, this was achieved using an <SCode>std::set</SCode> called <SCode>visited</SCode> and by checking if the state popped is present in <SCode>visited</SCode> at the beginning of each iteration.
      </SText>
      <SText>
        This editorial was a brief explanation of BFS in the context of this problem. For a more rigorous coverage, visit<Link href="https://usaco.guide/silver/graph-traversal?lang=cpp">this USACO Guide page</Link>.
      </SText>
      <SCodeBlock path="dreamingspires/sol" />
    </>
  );
};
