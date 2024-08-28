import {SCodeBlock, SText, STitle } from "components";
import { brace } from "solutions/util";
export const Decrypt = () => {
  return (
    <>
      <STitle>Solution</STitle>
      <SText>
        Suppose we are decrypting letter $n$, where $n \neq 1$. Let $x_i$ be the number value associated with the $i^\mathrm{brace("th")}$ letter of the unencrypted string, and $y_i$ be that of the encrypted string. The encryption procedure tells us that $x_{brace("n - 1")} + y_n \equiv x_n \pmod {brace("26")}$. This can be rearranged as $y_n \equiv x_n - x_{brace("n - 1")} \pmod {brace("26")}$. This gives an easy way to calculate each letter of the unencrypted string, by simply taking the difference of the two corresponding adjacent letters in the encrypted string. When inplementing this solution, it should be noted that the value of "Z" will be stored as $0$, not $26$, as this how the modulus (%) operator in programming languages returns values.
      </SText>
      <SCodeBlock path="decrypt/sol" />
    </>
  );
};
