import { Link, SCodeBlock, SText, STitle, HStack, Image, VStack } from "components";
import { brace } from "solutions/util";

export const BestOfShow = () => {
  return (
    <>
      <STitle>Abridged Statement</STitle>
      <SText>
        You are given a<Link href="https://en.wikipedia.org/wiki/Tournament_(graph_theory)">tournament</Link>on $n$ vertices and have to find a<Link href="https://en.wikipedia.org/wiki/Hamiltonian_path">Hamiltonian path.</Link>In the context of the problem, a directed edge $x$ to $y$ is interpreted as "testing showed that film $x$ was worse than film $y$".
      </SText>

      <STitle>Observation</STitle>
      <SText>
        Note that the problem text assures us that a Hamiltonian path always exists. This lends the problem to an inductive greedy approach, where we attempt to extend the Hamiltonian path on $n-1$ vertices (which is guaranteed to exist) to create a Hamiltonian path on $n$ vertices. 
      </SText>
      <HStack>
        <VStack align="flex-start">
          <SText>
            Suppose we already have a Hamiltonian path $a_1$, $a_2$, $\dots$, $a_{brace("n-1")}$ on $n-1$ vertices and we would like to add vertex $x$ into the path.
          </SText>
          <SText>
            If $x$ lost to $a_1$, then $x$ can go at the front of the list.
          </SText>
          <SText>
            If $x$ won against $a_{brace("n-1")}$, then $x$ can go at the end of the list.
          </SText>
          <SText>
            If neither of these are true, then $x$ won against $a_1$ but lost against $a_{brace("n-1")}$. Then take the first film which $x$ lost against to be $a_k$. Then it must be true that $x$ beat $a_{brace("k-1")}$. In other words, $x$ can slot into the list at position $k$. We can linear search for this $k$ in $\mathcal{brace("O")}(n)$, giving us an $\mathcal{brace("O")}(n)$ algorithm to extend the list by $1$.
          </SText>
        </VStack>
        <Image src="/assets/images/bestofshow/bestofshowexample.png" height="16rem" alt="Sample Diagram" />
      </HStack>

      <STitle>Solution</STitle>
      <SText>
        We can now apply this $\mathcal{brace("O")}(n)$ algorithm $n - 1$ times, starting from a list of 1 element to reach a complete list that forms a Hamiltonian path. This is an $\mathcal{brace("O")}(n^2)$ algorithm which will work given the constraints ($n &lt; 2^{brace("10")}$). When implementing this, a singly linked list approach works well for linear searching and then inserting elements into the list, but a vector could also be used.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="bestofshow/sol" />
    </>
  );
};
