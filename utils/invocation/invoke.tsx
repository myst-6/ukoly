import { Language } from "content";

export const invocationStatuses = ["OK", "TLE", "CE", "RE", "RJ", "TS"];

export type InvocationStatus = typeof invocationStatuses[number];

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
    fetch("https://execute-jk2pgw2dlq-uc.a.run.app",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: language.apiName,
          source,
          input
        }),
      }
    ).then(res => {
      if (!res.ok) {
        throw new Error(String(res));
      }
      return res.json();
    }).then(data => {
      const { verdict, stdout, stderr, compileOutput, time, memory } = data;
      if (!invocationStatuses.includes(verdict)) {
        throw new Error();
      }
      console.info(time,memory);
      resolve({
        status: verdict,
        message: verdict === "RE" ? stderr : verdict === "CE" ? compileOutput : stdout,
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