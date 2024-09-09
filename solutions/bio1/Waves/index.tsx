import { SCodeBlock, SText, STitle } from "components";

export const Waves = () => {
    return (
        <>
        <STitle>Observation</STitle>
        <SText>
          The main observation for this task is that the board size is small
          (only 9 by 9) and the number of pebbles is only $\leq 5$.
          This allows us to iterate through all the cells and all the pebbles
          to calculate the contribution of each pebble to the depth in each cell.
        </SText>

        <STitle>Solution</STitle>
        <SText>
        For a given pebble and a given cell, the contribution of the pebble to
        the depth of the cell at time $r$ is calculated in the following way:
          1. If the distance between the x-coordinates of the pebble and the cell
             + the distance between the y-coordinates of the pebble and the cell
             = $r$ - the time the pebble was thrown, the contribution = 1 (the first wave).
             If the same is true for $r$ - the time the pebble was thrown - 2,
             the contribution = -1 (the second wave).
          2. The only caveat is the fact that waves can reflect off the banks.
             There are several cases:
              1. The cell's x-coordinate is between the pebble's x-coordinate and the left bank.
                 Here each of the waves can only reflect once.
                 The time the first wave would then take to reach the cell
                 = the distance between the y-coordinates of the pebble and the cell
                 + the distance between the x-coordinates of the left bank and the pebble
                 + the distance between the x-coordinates of the left bank the cell.
                 With that, we can check whether the first or the second wave reaches the cell
                 at time $r$.
              2. The cell's x-coordinate is between the right bank the pebble's x-coordinate.
                 This case is solved similarly to the previous one.
              3. Both the cell and the pebble are in between the banks,
                 and the cell is to the left of the pebble. Here the waves can reflect infinitely.
                 The first reflection is when a wave touches the left bank.
                 The time taken for a wave to reach the cell after the first reflection
                 is calculated similarly to the previous two cases.
                 However, the wave can also reach the cell's x-coordinates every $d$ seconds
                 where $d$ is the distance between the banks.
                 So, in this case, the first wave will affect the cell if\

                  ($r$ - the time the pebble was thrown - the distance between the y-coordinates of the pebble and the cell
                  - the distance between the x-coordinates of pebble and the left bank
                  - the distance between the x-coordinates of the cell and the left bank) % $d$ == 0

                  and, of course, the number of reflections should not be negative,
                  so the dividend above should be $\geq 0$.

                  The effect of the second wave can be calculated similarly.
              4. Both the cell and the pebble are in between the banks,
                 and the cell is to the right of the pebble.
                 This case is solved similarly to the third case,
                 but the order of banks the waves are reflected off is the opposite.

          So, the full solution would be to iterate through the cells,
          check if the cell is not a bank (otherwise output X and move on to the next cell),
          iterate through all the pebbles and add up all their effects on teh depth this cell.
          If the total depth is negative, output o. If the total depth is positive, output *.
          Otherwise output -.
        </SText>

        <STitle>Code</STitle>
        <SCodeBlock path="waves/sol" />
        </>
    );
};