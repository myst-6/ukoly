import { SCodeBlock, SText, STitle } from "components";
import { brace } from "solutions/util";

export const Unlock = () => {
  return (
    <>
      <STitle>Observation</STitle>
      <SText>
        This problem cannot be solved by bruteforcing every possible combination
        of button presses, since the number of possible combinations is ${brace("3^{25} \\approx 8.47*10^{11}")}$, which
        would be far too slow. However, is it possible to bruteforce only some set of the buttons,
        and then use the results of those button presses to determine the rest of the button presses?
      </SText>

      <STitle>Solution</STitle>
      <SText>
        Just bruteforce all possible combinations of the top 5 buttons, and 
        then use the results of those button presses to determine the rest of the 
        button presses. Notice that after the top 5 buttons have been pressed, for
        each light in the top row, the only button that can affect its state, thus 
        set it to the correct state, is the button directly below it (for button A, this 
        is button F, for button B, this is button G, and so on). Thus, we can try to build a 
        solution like this, and if the top row combination is valid, at the end, no lights will be on. 
        Otherwise, there is clearly no solution with the given top row combination, and we can move on to the next one.
        The combinations can probably be generated in a nicer way (any ideas?) but 
        five nested loops will work just fine.
      </SText>  
      <SText>
        This can be done in ${brace("O(n^{2} * 3^n)")}$ time,
        where $n$ is the number of buttons in a row, which is $5$ in this case.
        The $3^n$ factor comes from the fact that there are $3$ possible states for each button,
        and the $n^2$ factor comes from the fact that for each possible combination of the top 5 buttons,
        we need to attempt to generate a valid combination of the other buttons.
        This is fast enough because ${brace("3^{5}*5^2 = 6075")}$, which passes comfortably in any language.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="unlock/sol" />
    </>
  );
};