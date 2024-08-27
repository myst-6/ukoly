import { SCodeBlock, SText, STitle, SList } from "components";

export const PromenadeFractions = () => {
  return (
    <>
      <STitle>Sample Explanation</STitle>
      <SText>
        Initially, the value before the most recent left choice was $1 / 0$ 
        and the value before the most recent right choice was $0 / 1$.
        The current value of the fraction is $(1+0)/(0+1) = 1/1$.
      </SText>
      <SList>
        <SText>
          The first choice is a left choice. The new value before the most recent left choice is $1 / 1$.
          The new value of the fraction is $(1+0)/(1+1) = 1/2$.
        </SText>
        <SText>
          The second choice is a right choice. The new value before the most recent right choice is $1 / 2$.
          The new value of the fraction is $(1+1)/(1+2) = 2/3$.
        </SText>
        <SText>
          The third choice is a left choice. The new value before the most recent left choice is $2 / 3$.
          The new value of the fraction is $(2+1)/(3+2) = 3/5$.
        </SText>
        <SText>
          The final choice is a left choice. The new value before the most recent left choice is $3 / 5$.
          The new value of the fraction is $(3+1)/(5+2) = 4/7$.
        </SText>
      </SList>
      <SText>
        This means the output should be $4/7$
      </SText>

      <STitle>Idea</STitle>
      <SText>
        Let's first observe that the constraints for the size of the promenade fraction is quite small. 
        This suggests we can simply iterate through and simulate each choice.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        Let's first initialise the value before the left and right choice as suggested by the problem statement.
        Let's also initialise the current value of the fraction as $1/1$.
        Now, we can iterate through each choice, and set the value before the left or right choice accordingly.
        Finally, we can output the result.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="promenadefractions/sol"/>
    </>
  );
};
