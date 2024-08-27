import { SCodeBlock, SText, STitle, SCode, SSubtitle, SList } from "components";

export const Migration = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Due to the small value of $n$, we can see that it is feasible to simulate the problem. 
        We can keep track of the landscape using a sparse 2 dimensional array.
        Every time we add a person to a cell, we can simply simulate that cell, as well as the ones around it.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        For larger problems (often question $2$), it is useful to abstract the problem, by creating a set of functions to simplify actions. 
        For this purpose, let's define the class <SCode>Board</SCode>, to allow us to keep track of the landscape.
      </SText>

      <SSubtitle>Adding a Person</SSubtitle>
      <SText>
        To add a person, we simply need to increment the value of the corresponding cell in the array.
        If the value of the cell becomes $4$, we should call a function to recursively update the cells around it.
        The <SCode>update</SCode> function should:
      </SText>
      <SList>
        <SText>Set the current cell's value to $0$.</SText>
        <SText>Increment the cells around the current cell.</SText>
        <SText>Call itself on the cells around the current cell, in case they have also reached $4$.</SText>
      </SList>

      <SSubtitle>Simulation</SSubtitle>
      <SText>
        Finally, we can simulate $n$ steps of the simulation, by adding each person as specified by the problem.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="migration/sol"/>
    </>
  );
};
