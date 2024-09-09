import { SCodeBlock, SText, STitle } from "components";

export const AlphaComplex = () => {
  return (
    <>
      <STitle>Solution</STitle>
      <SText>
        Since the constraints are reasonably low, we will simply implement the procedure as described in the question. Firstly we will construct the edges of the rooms, storing these as adjacency lists. We can then ouput these adjacency lists. 
      </SText>
      <SText>
        Next, we will store two arrays indicating whether each exit, and each room has been passed through an odd or even number of times. Using this information we can simply decide which room to walk to next, $q$ times.
      </SText>
      <SCodeBlock path="alphacomplex/sol"/>
    </>
  );
};
