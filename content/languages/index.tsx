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
        template: `\
#include <bits/stdc++.h>
using namespace std;

int main() {
\t// Enter your solution below. 
\t// Use std::cin and std::cout for I/O, do not 
\t// output any prompts, because the grader will not work.
\t// Please disregard any instructions in the original
\t// exam paper regarding input prompts.
\t// Don't forget to flush the output by using std::flush or std::endl
\t// or it might not be printed.
\t
\t
\treturn 0;
}`,
        initPos: { lineNumber: 10, column: 5 }
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
# Please disregard any instructions in the original
# exam paper regarding input prompts.

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
    // Please disregard any instructions in the original
    // exam paper regarding input prompts.

    

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
        // Please disregard any instructions in the original
        // exam paper regarding input prompts.
        Scanner sc = new Scanner(System.in);
        

    }
}

`, 
        initPos: { lineNumber: 11, column: 9 }
    },
    {
        display: "JavaScript",
        extension: "js",
        highlight: "js",
        apiName: "js",
        monaco: "javascript",
        template: `\
// To read a line of user input, use input() the same as python
// This will be provided by the grader.
// Do not try to output any prompts, because the grader will not work.
// Please disregard any instructions in the original
// exam paper regarding input prompts.
// To print a line of output, use console.log(...)
`, 
        initPos: { lineNumber: 5, column: 1 } 
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
    // Do not try to output any prompts, because the grader will not work.
    // Please disregard any instructions in the original
    // exam paper regarding input prompts.
    
}`,
        initPos: { lineNumber: 7, column: 5 }
    },
];