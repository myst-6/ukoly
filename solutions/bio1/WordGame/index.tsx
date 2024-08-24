import { SCodeBlock, SText, STitle } from "components";

export const WordGame = () => {
  return (
    <>
      <STitle>Observation</STitle>
      <SText>
        Since it would be far too slow to build every word, 
        we need a function $f(x, y)$ which returns the number of 
        valid words with score $x$ whose first letter is $y$.
        Although this sounds like a complicated task, it can 
        be thought of very simply through recursion.
      </SText>

      <STitle>Sample Explanation</STitle>
      <SText>
        Let's consider the sample input $BAB$.
        Alphabetically, it is the third word with score 5,
        the first two being $ACA$ and $AD$.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        We can define a recursive function $f(x, y)$ which
        returns the number of valid words with score $x$ 
        whose first letter is $y$.
        The base case is when $x = 0$, 
        in which case the function returns 0. Also, when $y \gt x$,
        the function returns 0, since the first letter cannot have a score
        greater than the total score of the word. Otherwise, 
        the function returns the sum of $f(x - y, z)$ for all
        $z$ from $1$ to $26$, where $z \neq y$.
        The reason this works is because if a word has score
        $x$ and first letter $y$, then the rest of the word
        has score $x - y$ and first letter $z$ for some $z \neq y$,
        because if $z = y$, then the first two letters are the same,
        which is not allowed. 
      </SText>
      <SText>
        Due to the recursive nature of the function, it can 
        be memoized to avoid recomputing the same values 
        more than once. This is done by
        storing the results of $f(x, y)$ in a dictionary "memo", 
        and returning memo[(x, y)] if it exists, and otherwise 
        computing the value and storing it in memo. This can 
        also be done using python's functools.cache() decorator,
        as shown in the code below. 
      </SText>
      <SText>
        This can also be done iteratively, by starting with 
        the base case and building up the values of $f(x, y)$
        for increasing values of $x$. This is done by
        initializing a 2D array of size $27 \times n$ 
        (where $n$ is the maximum score), and filling in the
        values of $f(x, y)$ for all $x$ and $y$. 
      </SText>
      <SText>
        To compute the answer for a given word $w$, we can first calculate
        the score of the word, then for each letter $y$ in $w$, we can 
        add the number of words with score less than the score of the suffix
        whose first letter is lexicographically smaller than 
        $y$ to the answer, and then update the score of the suffix by
        subtracting the value of $y$ from it.
      </SText>
      <SText>
        Since this can be hard to understand, here is a simple example:
      </SText>
      <SText>
        Consider the word $BAB$. The score of the word is $5$.
        The first letter is $B$, which means that we need to add the number
        of words with score equal to $5$ whose first letter is lexicographically
        smaller than $B$. Since $A$ is the only letter that is lexicographically
        smaller than $B$, we need to add the number of words with score $5$ whose
        first letter is $A$. This is $f(5, 1)$. Then, the value of the suffix
        is updated to $5 - 2 = 3$. The next letter is $A$, which means that there are
        no more words to consider for this position, because $A$ is the first letter in the alphabet.
        Therefore, subtract the value of $A$ from the score of the suffix, and move on to the next letter.
        The next letter is $B$. This time, however, we cannot use $A$, because otherwise 
        the first three letters would be $BAA$, which is not allowed. Therefore, the 
        answer for $BAB$ is $2$. However, we need to add $1$ to this answer, because
        the question is asking for the index of the word in the list of all valid words,
        rather than the number of words before it. Therefore, the answer is $3$.

      </SText>
      <SText>
        This form of dynamic programming comes up often in BIO Round 1, and when 
        you see a problem that involves counting the number of valid sequences
        with some property, you should consider using this method.
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="parsinglists/sol" />
    </>
  );
};