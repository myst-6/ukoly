import { SCodeBlock, SText, STitle, SList, SCode } from "components";

export const Waves = () => {
    return (
        <>
        <STitle>Observation</STitle>
        <SText>
          The main observation for this task is that the board size is small (only $9 \times 9$) and the number of pebbles is only $\leq 5$.
          This allows us to iterate through all the cells and all the pebbles to calculate the contribution of each pebble to the depth in each cell.
        </SText>

        <STitle>Solution</STitle>
        <SText>
          For a given pebble and a given cell, we can calculate the contribution of the first wave of the pebble to the depth of the cell at time $r$.
          Let the coordinates of the cell be $x_c$ and $y_c$, the coordinates of the pebble be $x_p$ and $y_p$, the time the pebble was thrown be $t_p$,
          and the $x$-coordinates of the left and right banks be $x_l$ and $x_r$ respectively. Let's also call the time elapsed since the pebble was thrown $\Delta t = r - t_p$.
        </SText>
        <SText>
          We can note that the time in which the wave reaches the cell if there are no collisions is $abs(x_c - x_p) + abs(y_c - y_p)$.
          Collisions in the $y$-direction are impossible, so we can subtract $abs(y_c - y_p)$ from $\Delta t$ and then work only in the $x$-dimension.
        </SText>
        <SText>
          Now, if $\Delta t \lt 0$, the wave cannot reach the cell in the allocated time, so it doesn't change the water level in the cell.
          If $\Delta t = 0$, then the wave cannot move in the $x$-axis anymore, so the water level either increases by $1$, if $x_c = x_p$, or remains the same otherwise.
        </SText>
        <SText>
          Apart from the time at which the pebble was thrown (at which there is only one wave, which increases the water level of the cell if $(x_c,y_c) = (x_p,y_p)$),
          there are two components of each wave that act independently from each other. One initially goes to the right, and the other one goes to the left.
        </SText>
        <SText>
          Now, for each component of the first wave, we need to determine whether it increases the water level in the cell by 1. Here I will explain the process only for the right component;
          the process for the left component is very similar. There are several possible cases, and at least one of them should be true for the wave component to increase the water level by $1$.
        </SText>
        <SList numbered>
          <SText>
            The pebble was thrown to the left of the left bank and there were no collisions yet,
            so the wave needs to travel $\Delta t$ cells to the right. The conditions for this case are $x_p \leq x_c \lt x_l$ and $\Delta t = x_c - x_p$.
          </SText>
          <SText>
            The pebble was thrown to the left of the left bank and there was one collision (it is impossible to get more collisions in this case).
            The wave needs to travel from the place the pebble was thrown to the left bank and back until it reaches the cell.
            The conditions for this case are $max(x_p, x_c) \lt x_l$ and $\Delta t = (x_l - x_p) - 1 + (x_l - x_c)$.
          </SText>
          <SText>
            The pebble was thrown to the right of the right bank. The wave again just needs to travel $\Delta t$ cells to the right.
            The conditions for this case are $x_r \lt x_p \leq x_c$ and $\Delta t = x_c - x_p$.
          </SText>
          <SText>
            The pebble was thrown in between the banks ($x_l \lt min(x_c, x_p)$ and $max(x_c, x_p) \lt x_r$).
            We can add $x_p - x_l$ to $\Delta t$ and check how the right component of the wave would behave if it started at $x_l$.
            The wave can be reflected either an odd or an even (possibly 0) number of times.$\\$
            For an even number of collisions, the wave should be able cover the distance between the banks an even number of times (returning to $x_l$) and then reach $x_c$,
            so $\Delta t$ should be $\geq x_c - x_l$ and $\Delta t - (x_c - x_l)$ should be divisible by $2(x_r - x_l - 1)$.$\\$
            For an odd number of collisions, the wave should be able to cover the distance between the banks an odd number of times (finishing at $x_r$) and then reach $x_c$,
            so $\Delta t$ shold be $\geq (x_r - x_c) + (x_r - x_l - 1)$ and $\Delta t - (x_r - x_c) - (x_r - x_l - 1)$ should be divisible by $2(x_r - x_l - 1)$.
          </SText>
        </SList>
        <SText>
          The process for the second (negative) wave is very similar, although this wave decreases the water level by 1 instead of increasing it.
          We also need to subtract $2$ from $\Delta t$ in the beginning, because the second wave is always $2$ seconds behind the first one.
        </SText>
        <SText>
          In the full solution, we need to iterate through the cells,
          check if the cell is not a bank (otherwise output <SCode>X</SCode> and move on to the next cell),
          iterate through all the pebbles, and add up all their effects on the this cell's water level.
          If the water level is negative, output <SCode>o</SCode>. If it is positive, output <SCode>*</SCode>.
          Otherwise output <SCode>-</SCode>.
        </SText>

        <STitle>Code</STitle>
        <SCodeBlock path="waves/sol" />
        </>
    );
};