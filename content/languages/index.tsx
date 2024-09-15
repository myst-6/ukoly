export interface Language {
    display: string;
    extension: string;
    highlight: string;
    pistonName: string;
    monaco: string;
    version: string;
    template: string;
    initPos: { lineNumber: number, column: number };
  }
  
  export const languages: Language[] = [
    {
      display: "C++",
      extension: "cpp",
      highlight: "cpp",
      pistonName: "c++",
      monaco: "cpp",
      version: "10.2.0",
      template: `#include <bits/stdc++.h>
using namespace std;

int main() {
  // Enter your solution below. 
  // Use std::cin and std::cout for I/O, and do not 
  // output any prompts, because the grader will not work.
  
  
  
  return 0;
}`,
      initPos: { lineNumber: 9, column: 3 }
    },
    {
      display: "Python",
      extension: "py",
      highlight: "python",
      pistonName: "python",
      monaco: "python",
      version: "3.10",
      template: `# Enter your solution below. Use input() 
# and print() for I/O, and do not output
# any prompts, because the grader will not work.

`,
      initPos: { lineNumber: 5, column: 1 }
    },
  ];
  
  export type Output = null | string;