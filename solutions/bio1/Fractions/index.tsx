import { SCodeBlock, SText, STitle, SSubtitle } from "components";

export const Fractions = () => {
  return (
    <>
      <STitle>Solution</STitle>
      <SSubtitle>Python</SSubtitle>
      <SText>
        Just use the features the language provides out of the box.
        See below for details.
      </SText>
      <SSubtitle>Most other languages</SSubtitle>
      <SText>
        Unfortunately, we have to actually do some work here.
        Repeatedly multiplying the input by $10$ until it is an integer
        also doesn't work because of floating point precision errors.
        Instead, we can count the number of digits after the decimal point,
        and remove the decimal point from the input (using string operations,
        not math). Now, we know that the numerator is the input without 
        the decimal point, and the denominator is $10$ raised to the number
        of digits after the decimal point. Now, we can simplify the fraction
        by dividing the numerator and denominator by their greatest common
        divisor. This can be computed using a built-in function in most
        languages.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="fractions/sol"/>
    </>
  );
};
