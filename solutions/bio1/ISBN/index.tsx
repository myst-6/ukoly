import { SCodeBlock, SText, STitle } from "components";

export const ISBN = () => {
    return (
        <>
            <STitle>Solution</STitle>
            <SText>
                Just iterate through all digits from $0$ to $9$ inclusive,
                which are all the possible values that can go in the position 
                of the question mark. Every time, calculate the verification 
                constant using the formula given in the problem statement. If
                the verification constant is divisible by $11$, then the digit
                is a valid digit for the question mark, and we can print it.
            </SText>
            <STitle>Code</STitle>
            <SCodeBlock path="isbn/sol" />
        </>
    );
};
