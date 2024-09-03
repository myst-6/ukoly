import { SCodeBlock, SText, STitle } from "components";
import { brace } from "solutions/util";

export const WatchingTheClock = () => {
  return (
    <>
      <STitle>Observation</STitle>
      <SText>
        We can simply brute force the solution, by finding the time each hour on each clock, and checking if they are equal.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        We can keep track of the minutes elapsed on each clock $\pmod {brace("24\\cdot60")}$.
        This represents the time on each clock, taking into account new days. 
        We can now simulate each hour, and check if the time on both clocks is equal. 
        Finally, we can output the time on either clock when they are equal. 
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="watchingtheclock/sol" />
    </>
  );
};
