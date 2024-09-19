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
  {
    display: "C++",
    extension: "cpp",
    highlight: "cpp",
    apiName: "cpp",
    monaco: "cpp",
    template: `#include <bits/stdc++.h>
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
    initPos: { lineNumber: 9, column: 3 }
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
    template: "", // TODO
    initPos: { lineNumber: 1, column: 1 } // TODO
  },
  {
    display: "Java",
    extension: "java",
    highlight: "java",
    apiName: "java",
    monaco: "java",
    template: "", // TODO
    initPos: { lineNumber: 1, column: 1 } // TODO
  },
  {
    display: "JavaScript",
    extension: "js",
    highlight: "js",
    apiName: "js",
    monaco: "js",
    template: "", // TODO
    initPos: { lineNumber: 1, column: 1 } // TODO
  },
  {
    display: "Rust",
    extension: "rs",
    highlight: "rust",
    apiName: "rust",
    monaco: "rust",
    template: "", // TODO
    initPos: { lineNumber: 1, column: 1 } // TODO
  },
  {
    display: "BF",
    extension: "bf",
    highlight: "bf",
    apiName: "bf",
    monaco: "bf",
    template: "", // TODO
    initPos: { lineNumber: 1, column: 1 } // TODO
  }
];