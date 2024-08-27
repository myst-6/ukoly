import { SCodeBlock, SText, STitle } from "components";
import { brace } from "solutions/util";

export const TickTock = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <STitle>Abridged Statement</STitle>
      <SText>
      You have $n$ clocks, each of which are audible from time $f$ to $l$ inclusive and make a tick sound when they are audible and the sum of the digits of the time they display is even.
      </SText>
      <SText>
      The input given is the integer $n$ and then $n$ lines of two integers $f_i$ and $l_i$, corresponding to the $f$ and $l$ values of the audible period of the $i$th clock.
      </SText>
      <SText>
      Output the total number of seconds in which at least one clock is audible and the number of those seconds in which a tick occurs.
      </SText>
      <STitle>Solution</STitle>
      <SText>
        If we were to calculate the number of ticks each clock makes, this could lead to duplicates being added to the output if multiple clocks are audible at the same time. To rectify this, before doing calculations,
        we need to merge overlapping intervals to get all the intervals in which at least one clock is audible. This can be done by sorting the $f_i, l_i$ pairs in ascending order of $f$ and comparing adjacent intervals.
      </SText>
      <SText>
        The total audible period can be calculated by summing $l - f + 1$ over all merged intervals, and the number of ticks in each interval can then be calculated by subtracting the number of ticks in ${brace("[")}0, f{brace(")")}$ from the number of ticks in ${brace("[")}0, l + 1{brace(")")}$.
      </SText>
      <SText>
        Now for the formula to calculate ticks in the range ${brace("[")}0, n{brace(")")}$. Given a number $m$, the number of ticks of the form $10m + r$, $0 \leq r \lt 10$, is always $5$, since if the sum of the digits of $m$ is even, the values of $r$ that yield a tick are $0$, $2$, $4$, $6$, and $8$, and if the sum is odd, the values of $r$ that yield a tick are $1$, $3$, $5$, $7$ and $9$.
      </SText>
      <SText>
        Let $n = 10m + r$. The range ${brace("[")}0, 10m{brace(")")}$ can be split into $m$ ranges ${brace("[")}0, 10{brace(")")}, {brace("[")}10, 20{brace(")")}, ... \, , {brace("[")}10{brace("(")}m - 1{brace(")")}, 10m{brace(")")}$, and in each of these ranges there are $5$ ticks.
      </SText>
      <SText>
        Therefore, the number of ticks in ${brace("[")}0, 10m{brace(")")} = 5m$.
      </SText>
      <SText>
        The rest of the ticks in ${brace("[")}0, n{brace(")")}$ are in the range ${brace("[")}10m, 10m + r{brace(")")}$. Since $0 \leq r \lt 10$, these can be counted brute-force by iterating over each value in the range ${brace("[")}0, r {brace(")")}$, adding it to the sum of the digits of $m$ and checking if that sum is even. This process is simplified in the sample code by only storing the parity of the sum of the digits of $m$.
      </SText>
      <SText>
        This gives us an iterative algorithm for finding the number of ticks in ${brace("[")}0, n{brace(")")}$ in $\mathcal{brace("O")}(\log n)$ time and space complexity. Given we have at most $2^{brace("15")} \approx 32\,000$ intervals to go through, the algorithm is more than fast enough to run within the time limit.
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="ticktock/sol" />
    </>
  );
};
