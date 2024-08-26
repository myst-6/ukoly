import { SCodeBlock, SText, STitle, SCode, SSubtitle } from "components";

export const MysteryParcel = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        The problem requires us to efficiently count the number of ways parcels of weight $w$ can be distrubuted.
        To do this, we can first observe that brute forcing every possible distribution is infeasible.
        Instead, we should use previous results to construct a solution: we should use dynamic programming.
      </SText>

      <STitle>Sample Explanation</STitle>
      <SText>
        In the sample we need to find the number of ways to distribute $2$ parcels.
        Each parcel can have items with weights $1$, $2$ or $3$.
        The total number of items in the parcels is $4$.
        The weight of each parcel is $3$. There are 3 ways the parcels can be distributed:
      </SText>
      <SText align={"center"}>
        $\tt{"1~1~1~—~3"}$<br/>
        $\tt{"3~—~1~1~1"}$<br/>
        $\tt{"1~2~—~1~2"}$
      </SText>

      <STitle>Solution</STitle>
      <SSubtitle>Weight Combinations</SSubtitle>
      <SText>
        We can first set up a helper function, <SCode>combsWeight</SCode>, which calculates the number of ways to achieve a certain weight (<SCode>n</SCode>) with exactly <SCode>items</SCode> items.
        To do this, let's iterate through all possible weights of the last item, and recursively call the function with the remaining weight and items.
        Note that to prevent duplicate solutions, we should only consider weights that are less than or equal to the previous weight, guarenteeing that the weights are in non-decreasing order.
        To prevent duplicate calls to the function, we can use memoization.
        We can do this through a map storing the inputs and outputs (note that Python's <SCode>functools.lru_cache()</SCode> decorator achieves the same effect).
      </SText>
      <SSubtitle>Parcel Combinations</SSubtitle>
      <SText>
        Using the helper function, we can count the number of parcel combinations.
        To do this, we can iterate through the number of items in the $i$-th parcel, and recursively call the function with the remaining weight and items.
        Finally, we can output the number of ways to distribute the parcels.
        Once again, we can memoize the results to prevent duplicate calls.
      </SText>
      

      <STitle>Code</STitle>
      <SCodeBlock path="mysteryparcel/sol"/>
    </>
  );
};
