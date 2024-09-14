import { SCodeBlock, SList, SText, STitle } from "components";

export const StringRewriting = () => {
  return (
    <>
      <STitle>Idea</STitle>
      
      <SText>
        Note constraints are big, therefore a brute force approach won't work. 
        Let $A[i], B[i], C[i], D[i], E[i]$ denote the result of $i$ operations applied to $A$, $B$, $C$, $D$ and $E$, respectively.  
      </SText>
      
      <SText>
        From considering small cases by hand, the following observations can be made: 
      </SText>
      
      <SList>
        <SText>$A[i] = A[i-1] + A[i-2]$</SText>
        <SText>$B[i] = A[i+1]$</SText>
        <SText>$C[i] = C[i-1] + D[i-1]$</SText>
        <SText>$D[i] = D[i-1] + C[i-1]$</SText>
        <SText>$E[i] = E[i-1] + E[i-1]$</SText>
      </SList>
      
      <SText>
        This means a divide-and-conquer approach could be used for this question. 
      </SText>

      <STitle>Solution</STitle>
      
      <SText>
        Initially, we precompute $2$ sequences and store them into arrays: powers of $2$ and the Fibonacci sequence. This will allow $O(1)$ retrieval for further queries regarding these $2$ sequences. 
      </SText>
      
      <SText>
        We will store the answer in a vector with size $5$ called $ans$, initialised with full zeroes. 
        We will also store the length that has been processed so far in $len$. By keeping track of this variable, we can ensure the information contributing to $ans$ is only when $len \leq pos$. 
      </SText>
      
      <SText>
        After this, we will iterate through each character of the three letter string. 
        In each iteration, we call a helper function called $countChars(c, steps, pos)$ which takes three parameters: $c$, the character of the current iteration; $steps$, how many operations we will apply on this character; and $pos$, the length of the string we should take into account.
        This function will return a vector $v$ with size $5$ containing (in order) the number of $A$, $B$, $C$, $D$, $E$ characters of the first $pos$ characters of $c[steps]$.  
      </SText>
        
      <SText>
        Using a divide-and-conquer approach, this function works by identifying two consecutive substrings $a$ and $b$, such that $a+b=c[steps]$. 
        If $pos \leq |a|$, then we call $countChars(c, steps-1, pos)$. 
        Else, we call $countChars(c, steps-2, pos - |a|)$. 
      </SText>
        
      <SText>
        $v$ will then be added to $ans$ (vector addition), and $len$ will be updated accordingly depending on $c$ (check implementation).
      </SText> 
        
      <SText> 
        Note that dynamic programing is used; we memoize the results of the function $countChars(c, steps, pos)$, as this means calculations which have been already done won't be made again.  
      </SText>
        
      <STitle>Code</STitle>
      <SCodeBlock path="stringrewriting/sol"/>
    </>
  );
};
