import { Sandbox } from "@cloudflare/sandbox";

export interface ExecutionInput {
  stdin: string;
  timeLimitMs: number;
  memoryLimitKb: number;
}

export interface ExecutionResult {
  stdout: string;
  stderr: string;
  exitCode: number;
  memoryKB: number;
  timeMS: number;
  timedOut: boolean;
  memoryExceeded: boolean;
  error?: string;
}

export type SandboxBindingName = "ExecutionSandbox" | "JavaSandbox" | "RustSandbox";

export type LanguageConfig =
  | {
    isCompiled: true;
    compileCommand: string;
    executeCommand: string | ((memoryLimitKb: number) => string);
    sourceFile: string;
    bindingName: SandboxBindingName;
  }
  | {
    isCompiled: false;
    setupStdin?: (code: string, stdin: string) => string;
    executeCommand: string;
    sourceFile: string;
    bindingName: SandboxBindingName;
  };

export type Language = "js" | "cpp" | "c" | "python" | "java" | "rust";

export const LANGUAGE_CONFIG: Record<Language, LanguageConfig> = {
  js: {
    isCompiled: false,
    sourceFile: "/app/code.js",
    executeCommand: "node /app/code.js",
    setupStdin: (code: string, stdin: string) => {
      const encodedStdin = btoa(stdin);
      return `
// Setup input handling
const input = (lines => () => lines.pop() || "")(atob("${encodedStdin}").split("\\n").map(line => line.trim()).reverse());

// Execute user code in an IIFE to avoid global variable pollution
(() => {
${code}
})();
`;
    },
    bindingName: "ExecutionSandbox",
  },
  cpp: {
    isCompiled: true,
    sourceFile: "/app/code.cpp",
    compileCommand: "g++ -std=c++17 -O2 -o /app/executable /app/code.cpp",
    executeCommand: "/app/executable",
    bindingName: "ExecutionSandbox",
  },
  c: {
    isCompiled: true,
    compileCommand: "gcc -std=c11 -O2 -o /app/executable /app/code.c",
    executeCommand: "/app/executable",
    sourceFile: "/app/code.c",
    bindingName: "ExecutionSandbox",
  },
  python: {
    isCompiled: false,
    sourceFile: "/app/code.py",
    executeCommand: "python3 /app/code.py",
    setupStdin: (code: string, stdin: string) => {
      const encodedStdin = btoa(stdin);
      return `
import base64
import sys

# Setup input handling
_input_lines = base64.b64decode("${encodedStdin}").decode().strip().split("\\n")
_input_index = 0

def input():
    global _input_index
    if _input_index < len(_input_lines):
        line = _input_lines[_input_index]
        _input_index += 1
        return line
    return ""

# Execute user code
${code}
`;
    },
    bindingName: "ExecutionSandbox",
  },
  java: {
    isCompiled: true,
    sourceFile: "/app/Main.java",
    compileCommand: "javac /app/Main.java",
    executeCommand: kb => {
      const heap = ~~(kb / 1024), cls = ~~(heap * 0.2);
      return `java -Xmx${heap}m -Xms${heap}m -XX:CompressedClassSpaceSize=${cls}m -XX:+UseSerialGC -XX:+ExitOnOutOfMemoryError -cp /app Main`;
    },
    bindingName: "JavaSandbox",
  },
  rust: {
    isCompiled: true,
    sourceFile: "/app/code.rs",
    compileCommand: "rustc -C opt-level=2 -o /app/executable /app/code.rs",
    executeCommand: "/app/executable",
    bindingName: "RustSandbox",
  },
};

// Handles multiple test cases sequentially, sleeps after 20s
export class ExecutionSandbox extends Sandbox {
  defaultPort = 3000;
  sleepAfter = "20s";
}
export class JavaSandbox extends Sandbox {
  defaultPort = 3000;
  sleepAfter = "20s";
}
export class RustSandbox extends Sandbox {
  defaultPort = 3000;
  sleepAfter = "20s";
}

export class SandboxRuntime {
  constructor(
    private sandbox: DurableObjectStub<Sandbox<unknown>>,
    private languageConfig: LanguageConfig,
    private code: string,
  ) { }
  compiled = false;
  stdinFile = "/app/stdin.txt" as const;

  async writeCode(code: string) {
    await this.sandbox.writeFile(this.languageConfig.sourceFile, code);
  }

  async writeStdin(stdin: string) {
    await this.sandbox.writeFile(this.stdinFile, stdin);
  }

  async compile() {
    if (!this.languageConfig.isCompiled)
      throw new Error("Language is not compiled");
    await this.writeCode(this.code);
    console.log(this.code);
    const compileResult = await this.sandbox.exec(this.languageConfig.compileCommand);
    this.compiled = compileResult.exitCode === 0;
    return compileResult;
  }

  async injectStdin(stdin: string) {
    if (this.languageConfig.isCompiled) return this.code;
    const injectedCode = this.languageConfig.setupStdin?.(this.code, stdin) || this.code;
    return injectedCode;
  }

  async executeTimed(timeLimitMs: number, memoryLimitKb: number): Promise<ExecutionResult> {
    const executeCommand = typeof this.languageConfig.executeCommand === "function" ? this.languageConfig.executeCommand(memoryLimitKb) : this.languageConfig.executeCommand;
    const monitorCommand = `/usr/local/bin/monitor.sh ${timeLimitMs / 1000} ${memoryLimitKb} "${executeCommand} < ${this.stdinFile}"`;
    const result = await this.sandbox.exec(monitorCommand);

    console.log("monitor command", monitorCommand);
    console.log("result", result);
    console.log("memory limit", memoryLimitKb);

    const outputLines = (result.stdout || "").trim().split("\n");
    const memoryKB = outputLines.pop();
    const timeMS = outputLines.pop();
    const programOutput = outputLines.slice(0, -1).join("\n"); // remove the extra empty line

    const executionResult: ExecutionResult = {
      stdout: programOutput,
      stderr: result.stderr || "",
      exitCode: result.exitCode || 0,
      memoryKB: Number.parseInt(memoryKB || "0"),
      timeMS: Number.parseInt(timeMS || "0"),
      timedOut: result.exitCode === 143,
      memoryExceeded: result.exitCode === 134,
    };

    return executionResult;
  }

  /**
   * If language is compiled, a precondition is that the code has already been compiled.
   * If the language is not compiled, the code is injected with the stdin.
   */
  async run(input: ExecutionInput): Promise<ExecutionResult> {
    await this.writeStdin(input.stdin);
    if (!this.languageConfig.isCompiled) {
      await this.writeCode(await this.injectStdin(input.stdin));
    } else if (!this.compiled) {
      throw new Error("Language is compiled but the code has not been compiled");
    }
    return await this.executeTimed(input.timeLimitMs, input.memoryLimitKb);
  }
}
