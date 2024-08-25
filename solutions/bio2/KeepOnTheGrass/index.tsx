import { SCode, SCodeBlock, HStack, SText, STitle, Image, VStack, SList } from "components";
import { brace } from "../../util";

export const KeepOnTheGrass = () => {
  return (
    <>
      <STitle>Observation 1</STitle>
      <SText>
        The pattern is symmetrical, so we can just solve
        the problem for positive $X$ and $Y$. Therefore,
        we can assume that $X, Y \geq 0$. Also, without
        loss of generality, we can assume that $X \geq Y$,
        because we can swap $X$ and $Y$ and the answer will
        still be the same.
      </SText>
      <STitle>Observation 2</STitle>
      <SText>
        You can map some subset of the grid in the
        diagram for day $2^n$ onto the grid for day $2^{brace("n+1")}$.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        The key observation to make here is that the grid for day $2^n$
        can be mapped onto the grid for day $2^{brace("n+1")}$ by resizing the
        grid by a factor of 2 (to get the black squares), filling in the gaps
        (the green squares), and then adding some more squares (the red squares).
        This is shown in the diagrams below, going from day $4$ to day $8$ on the left,
        and from day $8$ to day $16$ on the right.
      </SText>
      <HStack mt={2} gap={4} align="stretch">
        <VStack justify="space-around">
          <Image src="/assets/images/keeponthegrass/grass4.png" width="60rem" alt="Sample Diagram" />
          <Image src="/assets/images/keeponthegrass/grass5.png" width="60rem" alt="Sample Diagram" />
        </VStack>
        <VStack>
          <SText>
            When the squares are colour-coded like this, it is
            much easier to solve the problem, because it is
            clear that each square on day ${brace("2^{n+1}")}$
            is either:
          </SText>
          <SList ml={5}>
            <SText>
              Not grassed (white on the diagram), in which case
              the square is unreachable.
            </SText>
            <SText>
              Black, in which case the square can directly be
              mapped to a square on day $2^n$, and the answer
              is $2f({brace("\\frac{X}{2}")}, {brace("\\frac{Y}{2}")})$,
              because the black squares are twice as far apart 
              on day $2^{brace("n+1")}$ as they are on day $2^n$.
            </SText>
            <SText>
              Red, in which case the square is guaranteed to be 
              one square away from a black square, so the answer
              is $1 + f(n_x, n_y)$, where $(n_x, n_y)$ are the
              coordinates of the adjacent black square.
            </SText>
            <SText>
              Green, in which case the square is guaranteed to be
              one square away from two black squares, so the answer
              is $1 + min(f(a_x, a_y), f(b_x, b_y))$, where
              $(a_x, a_y)$ and $(b_x, b_y)$ are the coordinates
              of the adjacent black squares.
            </SText>
          </SList>
        </VStack>
        <VStack justify="space-around">
          <Image src="/assets/images/keeponthegrass/grass2.png" width="60rem" alt="Sample Diagram" />
          <Image src="/assets/images/keeponthegrass/grass.png" width="60rem" alt="Sample Diagram" />
        </VStack>
      </HStack>
      <STitle>Small implementation detail</STitle>
      <SText>
        We can even simplify the solution further by merging
        the red and green cases into one, by modifying the function
        to return {<SCode>LLONG_MAX</SCode>} when a square is unreachable,
        so for every red or green square, we can just return 
        $1 + \min(f(a_x, a_y), f(b_x, b_y))$.
      </SText>
      <STitle>Conclusion</STitle>
      <SText>
        Although ad-hoc tasks like this one can sometimes
        be quite intimidating, they often have very simple
        and elegant solutions. This problem is a good example
        of one such task, where generating a bigger version
        of the pattern and making some observations
        can lead to a very short solution.
      </SText>
      <SCodeBlock path="keeponthegrass/sol" />
      <SText>
        Or otherwise, you can choose to be like Boris and code whatever this is... take your pick!!
      </SText>
      <SCodeBlock path="keeponthegrass/borissol" />
    </>
  );
};
