import { SCodeBlock, SText, STitle } from "components";

export const FibonacciLetters = () => {
    return (
        <>
            <STitle>Idea</STitle>
            <SText>
                Realise that the constraint on $n$ is small, so we can
                simply generate the terms manually.
            </SText>
            <STitle>Solution</STitle>
            <SText>
                Let $a$ and $b$ be the first and second letters
                given in the input. Realise that if $n=1$, the 
                answer is $a$. Otherwise, we can 
                run a loop $n-2$ times, where we simultaneously 
                update the value of $a$ to $b$ and $b$ to $(a+b) \mod 26$.
                This can be done in one line in Python as shown 
                below, however in C++, we need to use a temporary
                variable to store the value of $b$ before updating
                $b$ to $(a+b) \mod 26$ and $a$ to $b$.
            </SText>
            <SText>
                When taking $a+b$, however, care needs to be taken 
                with the modulo operator. This is because the problem 
                defines the alphabet as $1$-indexed (i.e. $A=1, B=2\ldots$), 
                but the modulo operator works with $0$-indexing, i.e. it 
                returns a value in the range $[0, 25]$. To obtain the correct value, 
                first subtract $1$ from the result of $a+b$, then take the modulo,
                and finally add $1$ to the result. This is shown in the code below.
            </SText>
            <SText>
                This is an example of a very easy problem which has a few
                edge cases which need to be handled carefully. The lack of 
                a grader in BIO1 means that you need to be very careful with
                small implementation details, because otherwise it could cost 
                you a lot of marks.
            </SText>

            <STitle>Code</STitle>
            <SCodeBlock path="fibonacciletters/sol" />
        </>
    );
};
