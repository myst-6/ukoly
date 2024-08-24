import { SCodeBlock, SText, STitle } from "components";

export const DecoderRing = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        This problem is easy to implement.
      </SText>
      <SText>
        We can simply generate the second dial, and then decode the message as specified by the problem statement.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        To first generate the second dial, we can use a while loop and pop letters from the alphabet until none are left.
        We can then output the first 6 letters of this (by slicing the string) as the first part of the problem.
      </SText>
      <SText>
        Next, we can simply decode the message by iterating through the message and replacing each letter with the corresponding letter in the second dial.
        To rotate the second dial, we can pop the first letter and append it to the end.
        Finally, we can output the decoded message.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="decoderring/sol"/>
    </>
  );
};