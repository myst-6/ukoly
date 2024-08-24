import { Link, SCode, SCodeBlock, SText, STitle } from "components";
import { brace } from "solutions/util";

export const BrokersDoom = () => {
  return (
    <>
      <STitle>Abridged Statement</STitle>
      <SText>
        You are given an array of numbers, and an integer $t$. 
        Find the minimum achievable profit that is greater 
        than or equal to $t$, where profit can be earned
        by buying an item, waiting for some number of day 
        and then selling it, or by selling an item and then buying it.
      </SText>

      <STitle>Observation</STitle>
      <SText>
        This problem is equivalent to creating a {<Link href="https://usaco.guide/silver/prefix-sums?lang=cpp">prefix sum</Link>} array
        and finding the minimum difference between two elements 
        in the array that is greater than or equal to $t$. This 
        is because the profit is the absolute value of the difference
        between the value of the item at two points in time (since a
        negative difference indicates a loss, and a loss is equivalent 
        to the same profit, but instead of buying the item then selling
        it, you can sell it and then buy it), and the value of the 
        item at a point in time is the prefix sum of the changes in 
        value up to that point in time.
      </SText>

      <STitle>Sample Explanation</STitle>
      <SText>
        In the input, the array is $[-5, 9, 9, -6, -4, -5, 100]$ and $t = 19$.
      </SText>
      <SText>
        Therefore, the prefix sum array is $[0, -5, 4, 13, 7, 3, -2, 98]$.
      </SText>
      <SText>
        The minimum difference between two elements in the array that is greater than or equal to $19$ is $98 - 13 = 85$.
      </SText>
      <STitle>Solution</STitle>
      <SText>
        Of course, simply iterating through all pairs of elements in 
        the prefix sum array and checking if the difference is 
        greater than or equal to $t$ will work, but this is 
        too slow given the constraint on $n$. Instead, we can sort the 
        prefix sum array and use a {<Link href="https://usaco.guide/silver/two-pointers">two-pointer</Link>} 
        approach. We first initialise {<SCode>int ans = LLONG_MAX</SCode>}, 
        then set the left pointer to $0$ and the right 
        pointer to $1$. Then, at each step, we check if
        the difference between the values at the left and right
        pointers is greater than or equal to $t$. If it is, we do
        {<SCode>ans = min(ans, a[right] - a[left])</SCode>} {" "} and 
        move the left pointer to the right. This decreases
        the time complexity from $\mathcal{brace("O")}(n^2)$ to $\mathcal{brace("O")}(n \log n)$.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="brokersdoom/sol" />
    </>
  );
};
