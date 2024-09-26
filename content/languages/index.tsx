export interface Language {
    display: string;
    extension: string;
    highlight: string;
    apiName: string;
    monaco: string;
    template: string;
    initPos: { lineNumber: number, column: number };
}

export const languages: Language[] = [
    /*
    {
      display: "C++",
      extension: "cpp",
      highlight: "cpp",
      apiName: "cpp",
      monaco: "cpp",
      template: `\
  // Note: <bits/stdc++.h> produces undefined behaviour. Please avoid using it.
  // The below imports should encompass everything you need.
  #include <algorithm>
  #include <array>
  #include <bitset>
  #include <chrono>
  #include <complex>
  #include <deque>
  #include <functional>
  #include <iostream>
  #include <iterator>
  #include <limits>
  #include <map>
  #include <queue>
  #include <random>
  #include <set>
  #include <stack>
  #include <string>
  #include <tuple>
  #include <vector>
  #include <unordered_map>
  #include <unordered_set>
  using namespace std;
  
  int main() {
  \t// Enter your solution below. 
  \t// Use std::cin and std::cout for I/O, and do not 
  \t// output any prompts, because the grader will not work.
  \t
  \t
  \t
  \treturn 0;
  }`,
      initPos: { lineNumber: 30, column: 5 }
    },
    */
    {
        display: "C++",
        extension: "cpp",
        highlight: "cpp",
        apiName: "cpp",
        monaco: "cpp",
        template: `\
#include <bits/stdc++.h>
using namespace std;

int main() {
\t// Enter your solution below. 
\t// Use std::cin and std::cout for I/O, and do not 
\t// output any prompts, because the grader will not work.
\t
\t
\t
\treturn 0;
}`,
        initPos: { lineNumber: 9, column: 5 }
    },
    {
        display: "Python",
        extension: "py",
        highlight: "python",
        apiName: "python",
        monaco: "python",
        template: `# Enter your solution below. Use input() 
# and print() for I/O, and do not output
# any prompts, because the grader will not work.

`,
        initPos: { lineNumber: 5, column: 1 }
    },
    {
        display: "C",
        extension: "c",
        highlight: "c",
        apiName: "c",
        monaco: "c",
        template: `\
#include <stdio.h>
#include <stdlib.h>

int main() {
    // Enter your solution below.
    // Use scanf and printf for I/O, and do not 
    // output any prompts, because the grader will not work.

    

    return 0;
}
`,
        initPos: { lineNumber: 9, column: 5 }
    },
    {
        display: "Java",
        extension: "java",
        highlight: "java",
        apiName: "java",
        monaco: "java",
        template: `\
import java.util.*;

public class Main {
    // You can add helper methods here if necessary.

    public static void main(String[] args) {
        // Enter your solution below.
        // Use Scanner for input and System.out for output.
        Scanner sc = new Scanner(System.in);
        

    }
}

`, 
        initPos: { lineNumber: 11, column: 9 } // TODO
    },
    {
        display: "JavaScript",
        extension: "js",
        highlight: "js",
        apiName: "js",
        monaco: "javascript",
        template: `\
function main() {
    // Enter your solution below.
    // Use console.log for output and readline for input (if using Node.js).
    
    
}

// Start the program (if required by the environment)
// main();`, 
        initPos: { lineNumber: 5, column: 5 } // TODO
    },
    {
        display: "Rust",
        extension: "rs",
        highlight: "rust",
        apiName: "rust",
        monaco: "rust",
        template: `\
use std::{io,cmp,collections,fmt,ops};

fn main() {
    // Enter your solution below.
    // Use io::stdin().read_line for input and println! for output.
    
    
}`,
        initPos: { lineNumber: 7, column: 5 } // TODO
    },
];