import { SCode, SCodeBlock, SText, STitle } from "components";

export const DownPat = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Since the constraints are small, there is no 
        point looking for a clever algorithm - it 
        suffices to just do exactly what the problem
        statement says.
      </SText>
      <STitle>Solution</STitle>
      <SText>
        It is clear that the problem is solved easily 
        using recursion, because the definition of 
        a "pat" is recursive (recall that a "pat" is
        either a single letter or a string of letters 
        which can be split into a left and right 
        string (of at least 1 letter) where: each is
        the reverse of a pat; and all the letters in 
        the left string are later in the alphabet 
        than all the letters in the right string).
      </SText>
      <SText>
        Therefore, we can write a recursive function&nbsp
        {<SCode>is_pat(x)</SCode>}, and simulate the 
        problem statement exactly. First, we handle 
        the base case, returning true if the string 
        is a single letter. Then, we iterate through
        all possible ways to split the string into
        two parts, and then perform the necessary checks.
      </SText>
      <SText>
        There is an important optimization to make:
        we first check if every character in the left half 
        is greater than every character in the right half,
        and only then do we check if the reverses of the
        halves are pats. This is because the first check
        is much faster than the second since it is not 
        recursive. This decreases the runtime greatly.
      </SText>
      <STitle>Implementation Detail</STitle>
      <SText>
        To check if every character in the left half is
        greater than every character in the right half,
        it suffices to check if the minimum character in
        the left half is greater than the maximum character
        in the right half. Both Python and C++ have built-in
        functions to find the maximum and minimum of an array,
        and when the datatype used involves characters (for example,
        if it is a string), the default comparison operator 
        compares the characters lexicographically (i.e. in the order of the alphabet).
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="downpat/sol"/>
    </>
  );
};
