import { SCodeBlock, SText, STitle } from "components";

export const TuringMachine = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Let's first notice the small constraint of $m$. This suggests we can simply simulate each operation.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        We can use a hashmap to keep track of the state of each cell. 
        We can then simulate each operation and update the hashmap accordingly.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="turingmachine/sol"/>
    </>
  );
};
