import { Language } from "components";

export type InvocationStatus = "OK" | "TLE" | "RE" | "RJ" | "TS";

export interface InvocationResult {
  status: InvocationStatus;
  message: string;
}

export const waiting: InvocationResult = {
  status: "TS",
  message: "Waiting..."
};

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
 * @dispatch
 * A way of running invocation on a list of inputs for a given source code and language.
 */
export function invoke(
  source: string,
  input: string,
  language: Language,
): Promise<InvocationResult> {
  return new Promise<InvocationResult>(resolve => {
    fetch("https://emkc.org/api/v2/piston/execute",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: language.pistonName, // specify the language
          files: [
            {
              "name": "sol." + language.extension, 
              "content": source
            }
          ], // specify the code to execute
          stdin: input, // specify the input
          version: language.version,
        }),
      }
    ).then(res => {
      if (!res.ok) {
        console.error(res);
        resolve({
          status: "RJ",
          message: "Network error. Please report this to Boris on discord.",
        });
      }
      return res.json();
    }).then(data => {
      if (data.run.stderr || data.run.signal) {
        resolve({
          status: "RE",
          message: data.run.stderr || data.run.signal,
        });
      }
      resolve({
        status: "OK",
        message: data.run.stdout,
      });
    }).catch(err => {
      console.error(err);
      resolve({
        status: "RJ",
        message: "Grader error. Please report this to Boris on discord.",
      });
    });
  });
}