import { Image, SCodeBlock, SText, STitle, VStack } from "components";

export const GridNotation = () => {
  return (
    <>
      <STitle>Solution</STitle>
      <SText>
        The problem asks us to determine the coordinates of the square corresponding to the input string (if $n &gt; 1$) of a specific sub-grid in a recursively divided $5 \times 5$ grid. The specific region in question is determined using a sequence of uppercase letters, where each letter indicates a smaller subsection of the grid and $n$ is the number of characters in the sequence. For example, a $5^1 \times 5^1$ grid would appear as:
      </SText>      
      
      <VStack align-Items="center">
        <SText>
            <Image src="/assets/images/gridnotation/oneGrid.png" height="9rem" alt="Sample Diagram" />
        </SText>
      </VStack>
        
      <SText>
          Whereas a $5^2 \times 5^2$ grid would look like:
      </SText>

      <VStack align-Items="center">
          <SText>
              <Image src="/assets/images/gridnotation/twoGrid.png" height="9rem" alt="Sample Diagram" />
          </SText>
      </VStack>

      <SText>
          Instead of trying to build or traverse incredibly large grids in memory, we can find the change in horizontal and vertical coordinates that each letter in the sequence contributes, we can then add this to our starting coordinate $(1, 1)$.
      </SText>      

      <SText>
          For example, to determine the position of the square corresponding to the sequence "BC", we will first take into account how much "B" contributes to the horizontal and vertical position. For both of these, this will always be in the format $P \times 5^1$ using $5^1$ as B is the first letter in the sequence.
          To find the value for "P" for our horizontal contribution, we simply look at B's column index in the array. To find the value for "P" in our vertical contribution, we simply look at B's row position and subtract it from 5. This leads to a horizontal contribution of $1 \times 5^1$ and a vertical contribution of $4 \times 5^1$
      </SText>

      <SText>
          The character "C" follows similar logic. Since we are now considering the contribution within a smaller subdivision within the "B" block, we decrement the power on the 5. "C" thus follows the format $Q \times 5^0$ which is simply $Q$. The horizontal contribution of "C" is found in the same manner as it is for
          "B"; by using C's column index and C's row index subtracted from 5. This leads to a horizontal contribution of $2 \times 5^0$ and a vertical contribution of $4 \times 5^0$
      </SText>

      <SText>
          We can then simply add our horizontal contributions by each letter and our vertical contributions to each letter to $(1, 1)$ to obtain $(8, 25)$
      </SText>

      <SText>
          We can apply this logic to a sequence of any arbitrary length using a for loop. As we iterate through each character in the string, we calculate its vertical and horizontal contributions using the logic demonstrated above, decrementing the exponent of 5 with each step and adding them together to produce the final coordinates.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="gridnotation/sol" />
    </>
  );
};
