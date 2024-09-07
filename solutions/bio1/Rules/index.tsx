import { SCode, SCodeBlock, SText, STitle } from "components";

export const Rules = () => {
    return (
        <>
            <STitle>Idea</STitle>
            <SText>
                Since this problem is dealing with parsing a set of
                rules, at first glance, it appears as if it will need
                a large amount of code to implement with a lot of recursion 
                which is hard to think of, harder to implement and harder still to 
                debug. However, we can notice the absolutely
                tiny constraint on the length of the strings (at most $12$ characters).
                Can we exploit this to our advantage?
            </SText>
            <STitle>Solution</STitle>
            <SText>
                Define a pattern as a string of characters $x$, $u$ and $d$, such that 
                it matches the given rules. For example, given the ruleset <SCode>x(xu)*</SCode>,
                patterns that match this rule include <SCode>x</SCode>, <SCode>xxu</SCode>, <SCode>xxuxu</SCode>, and 
                so on.

            </SText>
            <SText>
                We can solve this problem by generating every possible pattern of
                length less than or equal to $12$ which fits the rules, and then
                checking if the given strings satisfy any of these patterns. 
            </SText>
            <SText>
                To do this, first tokenize the ruleset into a list of tokens. Define 
                a token as a string $s$ and two integers $low$ and $high$, which represents 
                the fact that the string $s$ can be repeated between $low$ and $high$ times.
                For example, the ruleset <SCode>x(xu)*</SCode> would be tokenized into the 
                list <SCode>[("x", 1, 1), ("xu", 0, inf)]</SCode>. We can set the <SCode>inf</SCode> value 
                to something sensible like $12$, because the maximum length of the string is $12$.
                Now, given this list of tokens, we can start with a list containing one element: 
                the empty string. For each token <SCode>(s, low, high)</SCode>, we add all possible 
                counts of <SCode>s</SCode> between <SCode>low</SCode> and <SCode>high</SCode> to every
                element in the list. We filter out any strings longer than $12$ characters, and
                repeat this process for every token. The final list contains all possible patterns
                that match the ruleset.
            </SText>
            <SText>
                Now, we can check if the given strings match any of these patterns. Since 
                there are no more brackets and complex rulesets, this can be done trivially.
            </SText>
            <SText>
                This solution sounds like it would be slow, but it is actually quite fast,
                because the maximum length of the string is $12$. However, early pruning 
                of patterns that are too long is necessary to make the solution run in time.
            </SText>
            <STitle>Code</STitle>
            <SCodeBlock path="rules/sol" />
        </>
    );
};
