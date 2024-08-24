import { Image, SCodeBlock, SText, STitle, VStack } from "components";

export const Pentominoes = () => {
  return (
    <>
      <STitle>Solution</STitle>
      <SText>
        This problem is a good old brute-force bash. It can be solved by drawing the two pentominoes at every possible position in a virtual canvas. The resulting shape is valid if the two shapes do not overlap and there is at least one square of one pentomino adjacent by an edge to a square of the other pentomino.
        All valid shapes are then added to a set. The number of distinguishable shapes is the size of the set once all possible position combinations are tried.
      </SText>
      <SText>
        In the sample code, the pentominoes are hard-coded as a matrix of 1s and 0s, with a 1 indicating a 'filled' square and a 0 an empty square.
        The canvas is modelled as a matrix of integers, and drawing the shapes is done by overwriting some elements on the canvas with the elements in the pentomino matrix.
      </SText>
      <SText>
        Since the largest pentomino width or height is 5 and there are two shapes on the canvas, the minimum necessary canvas width and height is 10 (the canvas is made square for convenience).
      </SText>
      <SText>
        At this stage, there is a problem. Take two possible valid shapes generated from $FF$ below, for example.
        They form the same shape but due to one being a translated version of the other, the algorithm would treat them as different shapes.
      </SText>
      <VStack align-items="center">
        <SText>
          <Image src="/assets/images/pentominoes/img1.png" height="9rem" alt="Sample Diagram" />
        </SText>
      </VStack>
      <SText>
        This can be fixed by storing the left, right, top and bottom boundary of the shape consisting of filled elements, and trimming the empty elements outside those bounds.
        For example, for the two shapes below the grey regions represent be trimmed and the remaining shapes can be compared, where the algorithm can now detect that the two shapes are indistinguishable
      </SText>
      <VStack align-items="center">
        <SText>
          <Image src="/assets/images/pentominoes/img2.png" height="9rem" alt="Sample Diagram" />
        </SText>
      </VStack>
      <SText>
        There is one last corner case at the end of the problem statement which states that two shapes are not distinguishable if they have the same square layout, regardless of which pentominoes were used to form them.
        This can be accounted for by overwriting non-empty cells such that they have the same value before adding the shape to the set, making sure that all produced shapes are only judged by their square layout.
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="pentominoes/sol" />
    </>
  );
};
