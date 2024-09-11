import { SCodeBlock, SText, STitle, Link } from "components";
import { BASE_URL } from "content";

export const Shirts = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Since the problem is asking for the smallest number
        of operations to get from a state to the target,
        this can be reformulated as a shortest path problem.
      </SText>
      <STitle>Solution</STitle>
      <SText>
        This problem can be solved by using a breadth-first search (BFS)
        algorithm. First, we need to add the initial state to a queue,
        and then we can iteratively pop the front of the queue and
        add all possible states that can be reached from the current
        state to the back of the queue. When we reach the target state,
        we can output the number of operations it took to get there,
        and this is guaranteed to be the smallest number of operations.
      </SText>
      <STitle>Implementation Detail</STitle>
      <SText>
        We can represent the four possible operations as a list 
        of lambda functions, and then run a loop to apply each
        operation to the current state. For BFS problems with a 
        large number of possible operations, this is a clean way 
        to implement the solution without repeating a large 
        amount of code.
      </SText>
      <SText>
        For more details, refer to the code below. If
        you are not familiar with BFS, you can read more
        about it <Link href="https://usaco.guide/silver/graph-traversal?lang=cpp">here</Link>.
        For another BIO problem that can be solved using BFS,
        see <Link href={`${BASE_URL}/bio1?problem=Dreaming+Spires`}>BIO1 2023 Q3 - Dreaming Spires</Link>.
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="shirts/sol" />
    </>
  );
};
