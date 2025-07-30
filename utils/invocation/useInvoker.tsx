import { useState } from "react";
import { invoke } from "./invoke";
import type { Language } from "content";
import { waiting, type InvocationResult } from "./types";

/**
 * @summary 
 * Runs code on a single input and produces the invocation result. 
 * The result is fed through a callback function. 
 * 
 * @dispatch​
 * A way of running invocation on a single inputs for a given source code and language.
 */
export function useInvoker() {
  const [result, setResult] = useState<InvocationResult>(waiting);

  /**
   * @param input
   * The stdin value.
   * 
   * @param source
   * The source code.
   * 
   * @param language
   * The source code's language.
   * 
   * @param onResult 
   * A function that accepts two arguments. 
   * The hook calls the onResult function one time for each time the result of an invocation completes.
   * The first parameter `index` is the index of the test in the list of inputs. The second parameter `result` is the result of the invocation.
   */
  function dispatch(
    input: string, 
    source: string, 
    language: Language
  ) {
    invoke(source, input, language).then(result => {
      setResult(result);
    }).catch(error => {
      console.error("Severe error, how could this have happened?");
      console.error(error);
    });
  }

  return { dispatch, result };
};