import { Link, SCodeBlock, SText, STitle } from "components";

export const Cards = () => {
    return (
        <>
            <STitle>Sample Explanation</STitle>
            <SText>
                There are $3$ unordered pairs of indices $(i, j)$ 
                such that $a_i$ = $a_j$. They are $(1, 2)$, $(2, 3)$, and $(1, 3)$.
                There are $3$ groups of cards which sum to $15$. They are 
                $(1, 4, 5)$, $(2, 4, 5)$, and $(3, 4, 5)$. Therefore, the output 
                is $3+3=6$.
            </SText>

            <STitle>Solution</STitle>
            <SText>
                We can first iterate over all pairs of indices $(i, j)$, and
                increment the answer every time $a_i = a_j$. Then, we can use 
                bitmasking to iterate over all possible subsets of the cards,
                and increment the answer every time the sum of the cards in the
                subset is $15$. 
            </SText>
            <SText>
                For an explanation of bitmasking, see
                <Link href="https://ukoly.vercel.app/bio1?problem=Block+Palindromes">Solution 2</Link> in 
                this editorial.
            </SText>

            <SCodeBlock path="cards/sol" />
        </>
    );
};