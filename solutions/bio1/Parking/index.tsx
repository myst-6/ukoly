import { SCodeBlock, SCode, SText, STitle } from "components";

export const Parking = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        This type of problem (find $k-$th of something) is quite common as problem 3, and the solution to this one can be readily applied to others of its type.
        Clearly, constructing all possible preference lists, then sorting them to find the ith one is much too slow, so you need to find a way to construct the solution letter by letter. 
        You do this by iterating through each car (a to z), and figuring out which preference spot to give each car so that the final list is the $k-th$ lexographically, while still maintaining a valid preference list.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        Taking the sample as an example, it is clear the parking slots progress like this:
      </SText>
      <SText>
      <SCode>.... -{'>'} .a... -{'>'} .ab. -{'>'} cab. -{'>'} cabd</SCode>
      </SText>

      <SText>
        So at each stage, we want to find where we can place the next car. For it to go in its correct slot, it must prefer the slot either that it ends up in, or a slot in front of that one which has no empty spaces between it and the slot which the car ends up in.
        For example, from cab. -{'>'} cabd, d can have any preferred parking slot, as all the slots in front of it are filled, and the only empty slot is D, which is a valid preferred slot as that is the one the car d ends up in. 
        On the other hand, if we have an arrangement like a.bc., and the next arrangement as a.bcd, D can only go in slots C, D, and E. Even though slot A is filled, there is an empty slot in between it and the E slot which car d ends up in, so it cannot be d's preferred slot. 
        So we can find all the possible preferred slots that the next letter can go in simply, but then which one do we use?
      </SText>

      <SText>
        We want the kth preference list, so we should first keep a counter <SCode>curr</SCode> as we iterate through all the cars, and then iterate in alphabetical order through these slots, and see if we use that slot as the preferred one, then how many preference lists have the same preferences for all the currently placed cars and the considered car. 
        If that number added to <SCode>curr</SCode> is greater or equal to $k$, then we have the correct preference and we continue to the next car; otherwise, we add that to <SCode>curr</SCode>, and continue to the next possible slot. To find how many preference lists have the same preferences for all the currently placed cars and the considered one, we can observe that when all cars are placed, the number of preference lists which are the same is exactly 1. 
        Moving back to before the last car is placed, the number of preference lists for that stage is now the number of valid possible preference slots for the last car. Moving further back to the second last car, the number of preference lists for that stage is the number of preference lists for the last car multiplied by the number of valid possible preference slots for the second last car. Using the sample example again, we can see the matching lists for each stage looks like this:
      </SText>
      
      <SText>
        <br/>
        <SCode>cabd : 1</SCode><br/>
        <SCode>cab. : 4</SCode><br/>
        <SCode>.ab. : 4</SCode><br/>
        <SCode>.a.. : 8</SCode><br/>
        <SCode>.... : 8</SCode><br/>
        <br/>
        So we can find these numbers easily by iterating backwards and multiplying the previous number by the number of choices for preferred slot at each stage.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="parking/sol"/>
    </>
  );
};