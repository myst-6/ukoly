import { SCodeBlock, SText, STitle, Link, SCode } from "components";

export const Shuffling = () => {
  return (
    <>
      <STitle>Solution</STitle>
      <SText>
        Like many BIO Round 1 Q2 problems, this problem is an exercise 
        in doing exactly what the problem statement says. We are given 
        a list of shuffles to apply to a deck of cards, and we need to
        determine the final order of the deck. 
      </SText>
      <SText>
        The solution is define a function <SCode>parse(instructions, current_cards, start, end)</SCode> which 
        takes in a list of instructions, the current order of the deck, and the start and end 
        indices of the string of instructions. The function will return the final order of the deck
        after applying the instructions. This function will be recursive, and will call itself on the
        substring between two matching brackets.
      </SText>
      <SText>
        For example, consider the string <SCode>3(b2(oi))$</SCode>. The function will be called on the 
        substring <SCode>b2(oi)</SCode> three times, and inside that function call, the function 
        will be called on the substring <SCode>oi</SCode> twice.
      </SText>
      <SText>
        When looking for the matching closing bracket, we need to keep track of the number of opening and closing brackets
        starting from the opening bracket. When the number of closing brackets is equal to the number of opening brackets, we have
        found the matching closing bracket.
      </SText>
      <SText>
        This problem is a miniature version of a programming language interpreter. If you enjoyed this problem,
        you may enjoy<Link href="https://www.youtube.com/watch?v=Eythq9848Fg&list=PLZQftyCk7_SdoVexSmwy_tBgs7P0b97yD">this video series</Link>on how to build a programming language interpreter.
      </SText>
      <SText>
        A BIO problem solvable by a very similar idea is <Link href="https://ukoly.vercel.app/bio1?problem=Parsing+Lists">BIO1 2024 Q2</Link>.
      </SText>
      <STitle>Code</STitle>
      <SCodeBlock path="shirts/sol" />
    </>
  );
};
