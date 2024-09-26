import { Language } from "content";

export const invocationStatuses = ["OK", "TLE", "MLE", "CE", "RE", "RJ", "TS", "WJ"] as const;

export type InvocationStatus = typeof invocationStatuses[number];

export interface InvocationResult {
  status: InvocationStatus;
  message: string;
  time: number;
  memory: number;
}

export const queue: InvocationResult = {
  status: "WJ",
  message: "In Queue",
  time: 0,
  memory: 0,
};

export const waiting: InvocationResult = {
  status: "TS",
  message: "Waiting...",
  time: 0,
  memory: 0,
};

export interface SubmissionData {
  verdict: InvocationStatus;
  stdout: string;
  stderr: string;
  compileOutput: string;
  time: number;
  memory: number;
} 

export function parse(data: SubmissionData): InvocationResult {
  const { verdict, stdout, stderr, compileOutput, time, memory } = data;
  if (!invocationStatuses.includes(verdict)) {
    throw new Error();
  }
  return {
    status: verdict,
    message: 
      verdict === "TLE" ? `Time limit exceeded: ${time}ms` :
      verdict === "MLE" ? `Memory limit exceeded: ${~~(memory / 1000)}MB` :
      verdict === "RE"  ? atob(stderr) : 
      verdict === "CE"  ? atob(compileOutput) : 
                          atob(stdout),
    time,
    memory: ~~(memory / 1000),
  };
}

/**
 * @summary 
 * Runs code on a single input and returns a promise holding an invocation result.
 * 
 * @param source
 * The source code, as a string.
 * 
 * @param input
 * The stdin for the test, as a string.
 * 
 * @param language
 * The code language being used.
 * 
 * @param timeLimit (optional)
 * The time limit, in seconds, for the code to run in. Defaults to 1 second.
 * 
 * @dispatch
 * A way of running invocation on a list of inputs for a given source code and language.
 */
export function invoke(
  source: string,
  input: string,
  language: Language,
  timeLimit?: number,
): Promise<InvocationResult> {
  return new Promise<InvocationResult>(resolve => {
    fetch("https://executesync-jk2pgw2dlq-nw.a.run.app",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: language.apiName,
          source,
          input,
          ...(timeLimit ? { timeLimit } : {})
        }),
      }
    ).then(res => {
      if (!res.ok) {
        throw new Error(String(res));
      }
      return res.json();
    }).then(data => {
      resolve(parse(data));
    }).catch(err => {
      console.error(err);
      resolve({
        status: "RJ",
        message: "Grader error. Please report this to Boris on discord.",
        time: 0,
        memory: 0,
      });
    });
  });
}