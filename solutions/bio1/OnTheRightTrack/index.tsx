import { SCodeBlock, SSubtitle, SText, STitle, SCode, } from "components";

export const OnTheRightTrack = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        This is a quite straightforward implementation problem, and with the small-ish $n$ $(n \le 10\,000)$, a simulation is in order.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        With larger problems (often Question $2$), it is useful to define a set of classes, and some methods embedded in them to help solve the problem.
        In this problem, we can define a class, <SCode>Stop</SCode>, which will store the type of stop (lazy or flip flop) it is, which stops it is connected to, and which curved track the next train going through the straight one will exit through.
        We will also update that specific curved track as each train passes through.
        With this <SCode>Stop</SCode> class, tracking the train's movement is easy, and we can do this using a map which will store each stop indexed by its character ($A, B$, etc).
        A helpful tip (specifically for C++): when you use a <SCode>map</SCode> with a custom struct/class, be sure to implement a constructor which takes no parameters (which can be empty).
        This is because the map uses this to create a default value when no value is found for a key, which shouldn't be a problem in our implementation, but is needed for the map to function.
        An <SCode>unordered_map</SCode> will require you to create an entire hash function for your class, which is considerably more tedious. 
      </SText>

      <SSubtitle>Initialising the board</SSubtitle>
      <SText>
        The board is created quite strangely, but it only has $26$ stops, so making it is relatively easy; just be careful to link the stops correctly with the left and right stops.
        I manually put in the top and bottom $4$ stops, and used a loop for the middle $2$ rows of $8$ stops.
      </SText>

      <SText>
        Now we can just run a loop with a <SCode>curr</SCode> and <SCode>next</SCode> stop to get the final two stops the problem wants.
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="ontherighttrack/sol"/>
    </>
  );
};
