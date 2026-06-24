import { Image, SCodeBlock, SText, STitle, VStack } from "components";

export const GridNotation = () => {
  return (
    <>
      <STitle>Solution</STitle>
      <SText>
        The problem asks us to determine the $x, y$ coordinates of the bottom-left square (if $n &gt; 1$) of a specific sub-grid in a recurisvely divided $5x5$ grid. The specific region in question is defined using a sequence of uppercase letters, where each letter indicates a smaller subsection of the grid and $n$ is the number of characters in the sequence. For example, a $1$x$1$ grid would appear as:
      </SText>      
      
      <VStack align-Items="center">
        <SText>
            <Image src="/assets/images/GridNotation/oneGrid.png" height="9rem" alt="Sample Diagram" />
        </SText>
      </VStack>
        
      <SText>
          Whereas a $2$x$2$ grid would look like:
      </SText>

      <VStack align-Items="center">
          <SText>
              <Image src="/assets/images/GridNotation/twoGrid.png" height="9rem" alt="Sample Diagram" />
          </SText>
      </VStack>

      <SText>
          Instead of trying to build or traverse incredibly large grids in memory, we can find the change in horizontal and vertical coordinates that each letter in the sequence contributes, we can then add this to our starting coordinate $(1, 1)$. For example, considerign the $25 \times 25$ grid above, to find the coordinates of the bottom left square when given the sequence BC, we can first start from $(1, 1)$. Since there are two characters in the sequence, $n=2$, which means the first letter will add $1 \times 5^1$ onto the horizontal position and $4 \times 5^1$ onto the vertical position. (The "1" is obtained by looking at B's column index in an array, whereas the 4 is obtained by subtracting B's row number from 5) This logic can then be repeated after decrementing $n$ by $1$. In a general case, this process will stop when $n$ reaches $0$.
      </SText>      
            
      <STitle>Code</STitle>
      <SCodeBlock path="gridnotation/sol" />
    </>
  );
};
