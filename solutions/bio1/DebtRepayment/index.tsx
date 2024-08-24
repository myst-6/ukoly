import { SCodeBlock, SText, STitle } from "components";

export const DebtRepayment = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Due to the nature of the problem (at least $1%$ decreased each iteration), we can simply simulate the process until the debt reaches $0$.
      </SText>
      <SText>
        Each iteration, we can calculate the amount to be repaid, and keep track of the total repaid amount in a variable.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        To preprocess the inputs, we can first convert the integer percentages into decimal form (i.e. $10$ into $0.1$). 
        This is done by dividing by $100$. Additionally, we should add $1$ to the interest amount, to allow easier multiplication when calculating the new debt.
      </SText>
      <SText>
        To avoid floating point math, we should keep track of the debt in cents. 
        This way, we can avoid rounding errors.
      </SText>
      <SText>
        Each iteration, we can simply do as the problem statement says: multiply the debt by the interest rate, and subtract the repaid amount. 
        We can then add the repaid amount to the total repaid amount.
      </SText>
      <SText>
        Finally, we can output the total repaid amount. 
        Remember that we have to divide this by $100$ to convert it from "pence" to "pounds". 
        To avoid floating point errors, we should once again round this to $2$ decimal places.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="debtrepayment/sol"/>
    </>
  );
};
