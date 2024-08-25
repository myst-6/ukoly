import { Link, SCodeBlock, SText, STitle, SCode } from "components";

export const SerialNumbers = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        Let's first notice that the input string is at most $9$ characters long.
        This suggests a brute force approach is reasonable.
      </SText>
      <SText>
        We can iterate through every equivalent serial number to the input, and use a Breadth First Search 
        (BFS, see more about this <Link href="https://usaco.guide/silver/graph-traversal?lang=cpp">here</Link>)
        to find the furthest serial number from the input.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        Initially, let's define some helper functions. The first function, <SCode>between</SCode>, 
        is used to check if the condition specified in the problem statement is satisfied for $2$ input digits - if one of
        those two digits is adjacent to a digit whose value lies between them.
      </SText>
      <SText>
        Next, we can define another helper method, <SCode>getNext</SCode> to generate all adjacent serial numbers to the input serial number.
        To do this, we can iterate through each pair, and if the condition is satisfied, we can swap the two digits.
      </SText>
      <SText>
        Finally, we can carry out a standard BFS, where we start with the input serial number, and explore through all its equivalents.
      </SText>
      <SText>
        To do this, we can use a queue to keep track of the serial numbers we need to explore. 
        We can also use a set to keep track of the serial numbers we have already visited.
        We also should keep track of the depth of the BFS, and the maximum depth reached will be the answer.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="serialnumbers/sol"/>
    </>
  );
};
