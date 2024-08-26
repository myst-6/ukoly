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
        The total audible period can be calculated by summing $l - f + 1$ over all merged intervals, and the number of ticks in each interval can then be calculated by subtracting the number of ticks up to $f$ exclusive from the number of ticks up to $l + 1$ exclusive.
      </SText>
      <SText>
        Now for the formula to calculate ticks up to a value $n$ exclusive. Given a number with $x$ digits, the number of ticks with $n + 1$ is always $5$, since if the sum of the first $n$ digits is even, the unit digits that yield a tick are $0$, $2$, $4$, $6$, and $8$, and if the sum is odd, then the units digits that yield a tick are $1$, $3$, etc.
        We can extend this further. Given a number with $x$ digits, the number of ticks with $x + 2$ digits is 50, as for any one of the 10 possible digits to occupy the $x + 1$-th position, there are $5$ possible unit digits that yield a tick.
      </SText>
      <SText>
        We can generalise this. Given a number with $x$ digits, the number of ticks with $x + k$ digits is $\frac{brace("10^k")}{brace("2")}$.
      </SText>
      <SText>
        Given we start with $x = 1$, where the first digit lower than the first digit of $n$, we can use the formula above to calculate the number of ticks with that first digit that are therefore lower than $n$. Let $a$ be the first digit of $n$. Since there are $a$ digits from $0$ to $n$ exclusive, in which case the formula for the number of ticks applies,
        the number of ticks with a first digit lower than $n$ is given by the expression $a \cdot \frac{brace("10^k")}{brace("2")}$, where $k = \lfloor log_{brace("10")}(p) \rfloor$.
      </SText>
      <SText>
        The rest of the ticks to count have the same first digit as $n$, but to determine the available subsequent digits to yield ticks that are also lower than $n$, we only need to store the parity of the sum of the previous digits, i.e. whether it is odd or even. We can then repeat the same method as before for the rest of the digits until we get to the units digit, where we iterate over all units digits from 0 to $b$ exclusive, where $b$ is the units digit of $n$, and incrementing the result if the sum of the units digit and the parity of the previous digits is even.
      </SText>
      <SText>
        This gives us a recursive algorithm for finding the number of ticks up to $n$ exclusive in $\mathcal{brace("O")}(\log n)$ time and space complexity. Given we have at most $2^{brace("15")} \approx 32,000$ intervals to go through, the algorithm is more than fast enough to run within the time limit.
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="ticktock/sol" />
    </>
  );
};
