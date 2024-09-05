import { SCodeBlock, SText, STitle } from "components";

export const EnigmaMachine = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        There are $16$ states the machine can be in. 
        This suggests it is easy to simulate.
      </SText>
      
      <STitle>Solution</STitle>
      <SText>
        Let's first define the outputs of each dial. 
        To rotate a dial, we can simply increment each item by $1$ $\pmod 4$ and then append the first item to the end.
        To get the encryption of a character, we can simply trace the path of the character through the machine.
      </SText>

      <SText>
        However, let's notice the large constraint on $n$. 
        This suggests that it's not feasible to rotate the dial $n$ times.
        However we can notice that the dial repeats every $4$ rotations, i.e. rotating the dial $4$ times is the same as rotating it $0$ times.
        This suggests that we can simply rotate the dial $n \bmod 4$ times.
        The same applies for the second dial.
        Now we can simply simulate the rest of the problem, and encrypt one letter at a time.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="enigmamachine/sol"/>
    </>
  );
};
