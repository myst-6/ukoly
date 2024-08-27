import { Link, SCode, SCodeBlock, SText, STitle } from "components";
import { brace } from "solutions/util";

export const BestOfShow = () => {
  return (
    <>
      <STitle>Abridged Statement</STitle>
      <SText>
        You are given a <Link href="https://en.wikipedia.org/wiki/Tournament_(graph_theory)">tournament</Link> on $n$ vertices and have to find a <Link href="https://en.wikipedia.org/wiki/Hamiltonian_path" >hamiltonian path</Link>. In the context of the problem, a directed edge $x$ to $y$ is interpreted as testing showed that film $x$ was worse than film $y$.
      </SText>

      <STitle>Observation</STitle>
      <SText>
        Note that the problem text assures us that a hamiltonian path always exists. This lends the problem to an inductive approach, where we extend the hamiltonian path on $n-1$ vertices, (which must exist), to create a hamiltonian path on $n$ vertices. 
      </SText>
      <SText>
        Suppose we already have a hamiltonian path $(a_i)_1^{n-1}$on $n-1$ vertices and we would like to add vertex $x$ into the path. If $x$ lost to $a_1$, then $x$ can go at the front of the list. If $x$ won against $a_{n-1}$, then $x$ can go at the end of the list. If neither of these are true, then $x$ won against $a_1$ but lost against $a_{n-1}$. Then take the first film which $x$ lost against to be $a_k$. Then it must be true that $x$ beat $a_{k-1}$. In other words, $x$ can slot into the list at position $k$. This gives us an $\mathcal{brace("O")}(n)$ algorithm to extend the path by 1. 
      </SText>

      <STitle>Sample Explanation</STitle>
      <SText>
        In the input, the array is $[-5, 9, 9, -6, -4, -5, 100]$ and $t = 19$.
      </SText>
      <SText>
        Therefore, the prefix sum array is $[0, -5, 4, 13, 7, 3, -2, 98]$.
      </SText>
      <SText>
        The minimum difference between two elements in the array that is greater than or equal to $19$ is $98 - 13 = 85$.
      </SText>
      <STitle>Solution</STitle>
      <SText>
        We can now apply this $\mathcal{brace("O")}(n)$ algorithm $n - 1$ times, starting from a list of 1 element to reach a complete list that forms a hamiltonian path. This is an $\mathcal{brace("O")}(n^2)$ algorithm which matches the constraints $n < 2^10$. In terms of implementation, the structure of the solution in terms of adding elements into a list lends itself to a singly linked list approach, but a vector would also work.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="bestofshow/sol" />
    </>
  );
};
