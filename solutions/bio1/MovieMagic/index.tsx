import { SCodeBlock, SText, STitle, SSubtitle, SList } from "components";

export const MovieMagic = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        To solve the problem, let's start by considering the brute force approach. We could generate all possible schedules and filter out the ones that meet the conditions, but this approach is not feasible due to the exponential number of possible schedules. Specifically, the number of schedules can grow as large as $n!$ multiplied by the product of the number of scenes for each actor, which quickly becomes computationally infeasible even for moderate values of $n$.
        Instead, we will use dynamic programming to count the valid schedules efficiently.
      </SText>

      <STitle>Solution</STitle>
      <SSubtitle>Counting Valid Schedules</SSubtitle>
      <SText>
        Let's define a function that takes in the current state of the scenes filmed by each actor. This state will be represented by a tuple where each element corresponds to the number of scenes filmed by an actor. The function will return the number of valid schedules that can be generated starting from this state.
      </SText>
      <SList>
        <SText>
          If the current state matches the target state (i.e., the exact number of scenes has been filmed by each actor), then there is exactly one valid schedule, so we return $1$.
        </SText>
        <SText>
          If at any point, the number of scenes filmed by a more senior actor is less than the number filmed by a junior actor, or if any actor exceeds their allotted number of scenes, the schedule is invalid, and we return $0$.
        </SText>
      </SList>
      <SText>
        To calculate the number of valid schedules, we will consider each possible next step:
      </SText>
      <SList>
        <SText>
          Increment the number of scenes for each actor by $1$ (one at a time) and recursively calculate the number of valid schedules that can be formed from this new state.
        </SText>
        <SText>
          The total number of valid schedules from the current state is the sum of the valid schedules from all possible next states.
        </SText>
      </SList>
      <SText>
        To avoid recalculating results for the same state multiple times, we will memoize the results using a cache.
      </SText>

      <SSubtitle>Finding the Answer</SSubtitle>
      <SText>
        The main challenge is to start from an initial state where no scenes have been filmed by any actor and recursively explore all possible valid schedules while ensuring that the seniority condition is respected. By summing up the results from all possible valid paths, we obtain the total number of valid schedules for the given input.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="moviemagic/sol" />
    </>
  );
};
