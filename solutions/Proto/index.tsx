import { HStack, Image, Link, ListItem, Text, UnorderedList } from "components";
import { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Latex from "react-latex-next";

export const Proto = () => {
  const [sol1, setSol1] = useState("// Loading...");

  useEffect(() => {
    // Fetch the .txt file from the public folder
    fetch("/assets/code/proto/sol1.cpp")
      .then((response) => response.text())
      .then((data) => setSol1(data))
      .catch((error) => console.error("Error fetching the text file:", error));
  }, []);

  const [sol2, setSol2] = useState("// Loading...");

  useEffect(() => {
    // Fetch the .txt file from the public folder
    fetch("/assets/code/proto/sol2.cpp")
      .then((response) => response.text())
      .then((data) => setSol2(data))
      .catch((error) => console.error("Error fetching the text file:", error));
  }, []);

  return (
    <>
      <Text typography="title.large" mt={2}>Abridged Statement</Text>
      <Text typography="body.medium">
        <Latex>
          First, let&apos;s write this problem formally. We are given a set of $n$ points, and
          for each point $(x_i, y_i)$, we need to find a point $(x_j, y_j)$ such that:
        </Latex>
      </Text>
      <UnorderedList ml={10} mt={1} mb={1}>
        <ListItem>
          <Text typography="body.medium">
            <Latex>
              $x_j &gt; x_i$ and $y_j &gt; y_i$
            </Latex>
          </Text>
        </ListItem> 
        <ListItem>
          <Text typography="body.medium">
            <Latex>
              The value of $(x_j - x_i) + (y_j - y_i)$ is minimised.
            </Latex>
          </Text>
        </ListItem>
      </UnorderedList>
      <Text typography="body.medium">
        <Latex>
          After this, we need to add up all the $(x_j - x_i) + (y_j - y_i)$ values.
          If no point $(x_j, y_j)$ satisfies the conditions, we should ignore that point.
        </Latex>
      </Text>

      <Text typography="title.large" mt={2}>Sample Explanation</Text>
      <HStack alignItems="flex-start">
        <Text typography="body.medium">
          <Latex>
            The lines show all the connections from a lower-left point $(x_i, y_i)$ to an
            upper-right point $(x_j, y_j)$. The connection from A to C costs 
            $(3 - 0) + (3 - 1) = 5$. The connection from B to C costs $(3 - 1) + (3 - 0) = 5$.
            The connection from C to D costs $(4 - 3) + (4 - 3) = 2$. Points D and E both do not
            have any points which are above and to the right of them, so they both have a cost of $0$.
            In total, the answer is $5 + 5 + 2 = 12$.
          </Latex>
        </Text>
        <Image src="./assets/images/proto/sample.png" height="16rem" alt="Sample Diagram" />
      </HStack>

      <Text typography="title.large" mt={2}>Idea</Text>
      <Text typography="body.medium">
        <Latex>
          In fact, this problem is a very standard data structure problem. It doesn&apos;t need
          many special observations, and there are three ways to go about solving it.
        </Latex>
      </Text>

      <Text typography="title.large" mt={2}>Solution 1: Sweep Line and Segment Tree</Text>
      <Text typography="body.medium">
        <Latex>
          As we know, a segment tree can support range minimum queries. Let&apos;s assign the value of 
          each point as $a_i = x_i + y_i$, then we can easily see that $(x_j - x_i) + (y_j - y_i) = a_j - a_i$. 
          So we need to range query all points which have higher $x$ and $y$ coordinates for the minimum value 
          of $a$ across them. Let&apos;s say we iterate through the points in descending $x$ coordinate, and add 
          the $a$ value at position $y$ in the tree as we go. At any point when we query the tree, all points 
          in the tree have greater $x$ coordinate due to this iteration order. So we can range query 
          $[y_i, \max_y]$ in the segment tree to find the best $a_j$ value. So now by sorting the points we&apos;ve 
          reduced the problem to a one-dimensional range query. However, currently $\max_y \le 2^{"{30}"}$. 
          To maintain the ordering of $y_i$ while reducing the magnitude of the values, we can use coordinate 
          compression. This involves assigning each $y_i$ to its position in the sorted list of $y$ values. 
          With this, $\max_y \le n$ and so this solution works in $\mathcal{"{O}"}(n \log n)$.
        </Latex>
      </Text>
      <Text typography="body.medium" mt={1}>
        You can read further on this topic <Link href="https://usaco.guide/plat/range-sweep" color="blue">here</Link>.
      </Text>

      <Text typography="title.large" mt={2}>Code</Text>
      <CopyBlock 
        text={sol1} 
        language="cpp" 
        theme={dracula} 
        customStyle={{
          "max-height": "30em",
          "overflow-y": "auto",
          "font-size": "0.8rem",
        }}
        showLineNumbers 
      />

      <Text typography="title.large" mt={2}>Solution 2: Sweep Line and Set</Text>
      <Text typography="body.medium">
        In fact, this solution doesn&apos;t actually require a segment tree; it can be implemented using a set.
        This is because all queries on the segment tree are suffix queries, and we are only ever inserting
        new points into the data structure and not deleting them. Details about this technique can be found
        <Link href="https://usaco.guide/adv/springboards" color="blue">here</Link>.
      </Text>

      <Text typography="title.large" mt={2}>Code</Text>
      <CopyBlock 
        text={"// No solution for this method yet :C\n"} 
        language="cpp" 
        theme={dracula} 
        customStyle={{
          "max-height": "30em",
          "overflow-y": "auto",
          "font-size": "0.8rem",
        }}
        showLineNumbers 
      />

      <Text typography="title.large" mt={2}>Solution 3: CDQ Divide and Conquer</Text>
      <Text typography="body.medium">
        Actually, we don&apos;t even need a set! It can be solved with only sorting.
        This is a technique to solve multi-dimensional range queries with extremely low memory usage,
        discovered by a Chinese competitive programmer called CDQ. You can read more about it 
        <Link href="https://robert1003.github.io/2020/01/31/cdq-divide-and-conquer.html" color="blue">here</Link>.
      </Text>

      <Text typography="title.large" mt={2}>Code</Text>
      <CopyBlock 
        text={sol2} 
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
