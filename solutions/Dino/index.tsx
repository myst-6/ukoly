import { HStack, ListItem, Text, UnorderedList } from "components";
import { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Latex from "react-latex-next";

export const Dino = () => {
  const [sol, setSol] = useState("// Loading...");

  useEffect(() => {
    // Fetch the .txt file from the public folder
    fetch("/assets/code/dino/sol.cpp")
      .then((response) => response.text())
      .then((data) => setSol(data))
      .catch((error) => console.error("Error fetching the text file:", error));
  }, []);

  return (
    <>
      <Text typography="title.large" mt={2}>Abridged Statement</Text>
      <Text typography="body.medium">
        <Latex>
          The required conditions are laid out pretty clearly in the statement, but they are obscued
          by a lot of legend, so let&apos;s write them out again here. Let the opposite index in a pair
          of spies be $\operatorname{"{"}opp{"}"}_i$. We need to construct a string $s$ of even length $n$ 
          consisting only of the characters $A$ and $B$ satisfying the following conditions:
        </Latex>
      </Text>
      <UnorderedList ml={10} mt={1} mb={1}>
        <ListItem>
          <Text typography="body.medium">
            <Latex>
              If $s_i = A$, then $s_{"{"}\operatorname{"{"}opp{"}"}_i{"}"} = B$, and vice versa.
            </Latex>
          </Text>
        </ListItem> 
        <ListItem>
          <Text typography="body.medium">
            <Latex>
              No three adjacent characters must all be equal to each other.
            </Latex>
          </Text>
        </ListItem>
        <ListItem>
          <Text typography="body.medium">
            <Latex>
              For every sequence of five adjacent characters, at least two are $A$ and at least two are $B$.
            </Latex>
          </Text>
        </ListItem>
      </UnorderedList>

      <Text typography="title.large" mt={2}>Observation</Text>
      <HStack alignItems="flex-start">
        <Text typography="body.medium">
          <Latex>
            All strings in the form $(AB|BA)+$ satisfy the last two conditions:
          </Latex>
        </Text>
      </HStack>
      <UnorderedList ml={10} mt={1} mb={1}>
        <ListItem>
          <Text typography="body.medium">
            <i>No three adjacent characters must all be equal to each other. </i>
            <Latex>
              Each group of three adjacent characters will contain one pair of $AB$, so they will
              not be all equal to each other.
            </Latex>
          </Text>
        </ListItem>
        <ListItem>
          <Text typography="body.medium">
            <em>
              <Latex>
                For every sequence of five adjacent characters, at least two are $A$ and at least two are $B$.
              </Latex>
            </em>
            {" "}
            <Latex>
              Each group of five adjacent characters will contain two pairs of $AB$, so they will
              contain at least two $A$ and two $B$.
            </Latex>
          </Text>
        </ListItem>
      </UnorderedList>

      <Text typography="title.large" mt={2}>Idea</Text>
      <Text typography="body.medium">
        <Latex>
          It turns out that strings in the form $(AB|BA)+$ are sufficient to generate all solutions.
          We need to assign each disjoint pair of characters to either an $AB$ or a $BA$. 
          So let&apos;s create a graph with each node representing the disjoint pairs of characters.
          Each node can be assigned one of two values - to be $AB$ or to be $BA$.
          We can think of these two states as colours of the graph. So we should try to construct
          a graph such that its two-colouring will give a valid solution under the first condition.
        </Latex>
      </Text>

      <Text typography="title.large" mt={2}>Solution</Text>
      <Text typography="body.medium">
        <Latex>
          Let&apos;s find a way to add edges to the graph so that it remains bipartite (so that it has a 
          two-colouring) and so that it enforces the first condition. Consider the parity of each index
          in the pairs given in the input. If both indices are even, or both are odd, it follows that
          one of the two nodes in the graph must have opposite colours - that is, one must be $AB$ and 
          the other must be $BA$, otherwise the characters will be equal to each other. Therefore, we can 
          draw an edge between the edges, saying that they should be opposite. Similarly, if one index is even 
          and the other is odd, it follows that both of the nodes in the graph must have the same colour - that 
          is, they are either both $AB$ or both $BA$. To enforce this, we can connect each of the nodes in question
          to a new dummy node.
        </Latex>
      </Text>

      <Text typography="body.medium" mt={2}>
        <Latex>
          So we&apos;ve proven that, if we can find a two-colouring of this graph, the solution will
          satisfy all three condition. How can we prove that a two-colouring always exists? Well, a graph
          is bipartite if and only if all cycles are of even length. A cycle starting and ending at a node
          begins from either the even or odd index in the pair, and returns to the index of opposite parity.
          It&apos;s clear to see from our construction that any path connecting two indices of the same parity 
          has odd length and any path connecting two indices of opposite parity has even length. Therefore, all 
          cycles are of even length and so a two-colouring will always exist.
        </Latex>
      </Text>

      <Text typography="body.medium" mt={2}>
        <Latex>
          To find a two-colouring after building the graph, we can just run a DFS and assign colours greedily.
        </Latex>
      </Text>

      <Text typography="title.large" mt={2}>Code</Text>
      <CopyBlock 
        text={sol} 
        language="cpp" 
        theme={dracula} 
        customStyle={{
          "max-height": "30em",
          "overflow-y": "auto",
          "font-size": "0.8rem",
        }}
        showLineNumbers 
      />

    </>
  );
};
