import { SCodeBlock, SText, STitle } from "components";

export const PlayfairCipher = () => {
  return (
    <>
      <STitle>Solution</STitle>
      <SText>
        This is a very simple implementation problem. Just do exactly what 
        is described in the problem statement.
      </SText>
      <SText>
        The grids can be created by building the $25$-letter alphabet 
        in the way described in the problem statement, then placing these 
        letters into a $5 \times 5$ grid. 
      </SText>
      <SText>
        Note that encrypting and decrypting are the same operation,
        so the same function can be used for both, however the
        letter $X$ is a special case, because if after decryption, 
        the last letter of the plaintext is $X$, then it should be
        removed, and when encrypting, if the number of letters in the
        plaintext is odd, then an $X$ should be added to the end of
        the plaintext before encrypting.
      </SText>      
      <STitle>Code</STitle>
      <SCodeBlock path="playfaircipher/sol" />
    </>
  );
};
