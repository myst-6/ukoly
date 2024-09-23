import { useCallback, useEffect, useState } from "react";
import { InvocationResult, parse } from "./invoke";
import { Language } from "content";

// how many milliseconds before we query the API to check our results
// 5000 works but is quite unnatural
// I think 2000 should be good.
const CHECK_INTERVAL = 2000;

/**
 * @summary 
 * Runs code on a list of inputs and produces invocation results.
 * 
 * @results
 * A list of invocation results.
 * The i-th invocation result is for the i-th test given in the dispatch.
 * 
 * @dispatch​
 * A way of running invocation on a list of inputs for a given source code and language.
 */
export function useRunner() {
  const [results, setResults] = useState<InvocationResult[]>([]);
  const [tokens, setTokens] = useState<string[]>([]);

  const check = useCallback(() => {
    if (tokens.length === 0) {
      return;
    }
    fetch("https://getmany-jk2pgw2dlq-nw.a.run.app",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tokens: JSON.stringify(tokens),
        }),
      }
    ).then(res => {
      if (!res.ok) {
        throw new Error(String(res));
      }
      return res.json();
    }).then(data => {
      console.log("got data", data);
      const { results } = data;
      const parsed: InvocationResult[] = results.map(parse);
      setResults(parsed);
      if (parsed.some(result => result.status === "TS" || result.status === "WJ")) {
        setTimeout(check, CHECK_INTERVAL);
      }
    }).catch(err => {
      console.error(err);
    });
  }, [tokens]);

  useEffect(() => {
    setTimeout(check, 1000);
  }, [check, tokens]);

  /**
   * @param inputs
   * The list of stdin values.
   * 
   * @param source
   * The source code.
   * 
   * @param language
   * The source code's language.
   * 
   * @param timeLimit (optional)
   * The time limit, in seconds, for the code to run in. Defaults to 1 second.
   * 
   * @param onResult 
   * A function that accepts two arguments. 
   * The hook calls the onResult function one time for each time the result of an invocation completes.
   * The first parameter `index` is the index of the test in the list of inputs. The second parameter `result` is the result of the invocation.
   */
  function dispatch(inputs: string[], source: string, language: Language, timeLimit?: number) {
    setTokens([]);
    fetch("https://executemanyasync-jk2pgw2dlq-nw.a.run.app",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: language.apiName,
          source,
          inputs: JSON.stringify(inputs),
          ...(timeLimit ? { timeLimit } : {})
        }),
      }
    ).then(res => {
      if (!res.ok) {
        throw new Error(String(res));
      }
      return res.json();
    }).then(data => {
      const { tokens } = data;
      setTokens(tokens);
    }).catch(err => {
      console.error(err);
    });
  }

  return { results, dispatch };
}
