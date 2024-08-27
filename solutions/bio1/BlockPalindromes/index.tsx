import { SCodeBlock, SText, STitle } from "components";
import { brace } from "solutions";

export const BlockPalindromes = () => {
    return (
        <>
            <STitle>Sample Explanation</STitle>
            <SText>
                The sample input is $BBACBB$. This can be split 
                in 3 ways to make block palindromes:
                $(B)(BACB)(B)$, $(BB)(AC)(BB)$, and $(B)(B)(AC)(B)(B)$.
            </SText>
            <STitle>Observation</STitle>
            <SText>
                The constraints of this problem are really small. Does this hint at the solution?
            </SText>
            <STitle>Solution 1: Using Recursion</STitle>
            <SText>
                Observe that by adding a block to the front of 
                a block palindrome, and adding the same block to 
                the end of the block palindrome, we get a new block
                palindrome.
            </SText>
            <SText>
                We can define a function $f(x)$ that returns the number of ways to split the string $x$ into block palindromes.
                This function then enumerates all possible ways to split each string into three
                parts, a prefix of length $i$, a suffix of length $i$ and some string 
                in the middle. Then, for every $i$, if the prefix does not 
                equal the suffix, this means no block palindromes can 
                be created this way, so we can move on. Otherwise, call the 
                function for the middle string and add the result to the 
                running total. Of course, any recursive function must 
                have a base case - if the length of a string is less than 
                $2$, then there is only one way to split it into a block
                palindrome, so just return $1$. 
            </SText>
            <SText>
                There is an important implementation detail for this solution.
                For each call of $f(x)$, the counter which stores the number 
                of ways to split the string $x$ into block palindromes must be
                initialised at $1$, not $0$. This is because any string is a block
                palindrome by itself, so we must account for this in our count.
                However, we must remember to subtract $1$ from the final answer,
                because the problem asks for the number of ways to split the string
                into two or more blocks, so the full string is not a valid answer.
            </SText>
            <SText>
                Let's consider the string $BBACBB$ again. First, we call 
                $f(BBACBB)$. We enumerate i, from the start of the string to the midpoint.
                We first set the answer to 1. We first consider $i = 1$. The prefix is $B$, 
                the suffix is $B$, so we can call $f(BACB)$, and add the result to the answer.
                We then consider $i = 2$. The prefix is $BB$, the suffix is $BB$, so we can call
                $f(AC)$, and add the result to the answer. We then consider $i = 3$. The prefix is
                $BBA$, the suffix is $CBB$, so we can ignore this case, because the prefix does not
                equal the suffix. Therefore, $f(BBACBB) = f(BACB) + f(AC) + 1$.
            </SText>
            <SText>
                Now, we can deal with $f(BACB)$. We enumerate i, from the start of the string to the midpoint.
                We first set the answer to 1. We first consider $i = 1$. The prefix is $B$,
                the suffix is $B$, so we can call $f(AC)$, and add the result to the answer.
                We then consider $i = 2$. The prefix is $BA$, the suffix is $CB$, so we can ignore this case.
                Therefore, $f(BACB) = f(AC) + 1$, and our final answer is $f(BBACBB) = f(AC) + f(AC) + 1 + 1$.
            </SText>
            <SText>
                Now, we can deal with $f(AC)$. Again, we start a counter at 1. We enumerate i, 
                from the start of the string to the midpoint. If 
                $i = 1$, the prefix is $A$, the suffix is $C$, so we can ignore this case.
                Therefore, $f(AC) = 1$, and our final answer is $f(BBACBB) = 1 + 1 + 1 + 1 = 4$.
            </SText>
            <SText>
                However, we must remember to subtract $1$ from the final answer so we output $4-1=3$.
            </SText>
            <SCodeBlock path="blockpalindromes/recsol" />
            <STitle>Solution 2: Using Bitmasks</STitle>
            <SText>
                We can make the observation that splitting a string 
                into blocks is equivalent to placing barriers 
                between adjacent characters. From now on, instead 
                of representing the blocks using parentheses, we
                will represent them using barriers. For example,
                $(B)BACB(B)$ can be represented as $B|BACB|B$.
                We can make the observation that between $n$
                characters, there are $n-1$ barriers.
            </SText>
            <SText>
                Since there are at most $10$ characters in the 
                string, there are at most $9$ barriers. We can
                represent the barriers using a bitmask, which, 
                in essence, is a number in binary with $9$ bits.
                If the $i$-th bit is $1$, then there is a barrier
                between the $i$-th and $i+1$-th characters, and if
                the $i$th bit is $0$, then there is no barrier.
                The advantage of bitmasks is that it is very easy 
                to iterate through all possible bitmasks - we can
                simply iterate through all numbers from $0$ to
                $2^{brace("n-1")}-1$, where $n$ is the number of
                characters in the string. Then, we can check if 
                the $i$-th bit is $1$ by shifting the mask 
                $i$ times to the right and checking if the result 
                is odd, Then, we can build each block by 
                constructing each substring between the barriers,
                and then checking if the resulting list 
                of blocks forms a block palindrome.
            </SText>
            <SCodeBlock path="blockpalindromes/bitsol" />
        </>
    );
};