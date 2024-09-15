import { useState } from "react";
import { InvocationResult, waiting } from "./invoke";
import { useInvoker } from "./useInvoker";
import { Language } from "content";

/**
 * @summary 
 * Runs code on a list of inputs and produces invocation results. 
 * The results are fed through a stateful return value.
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

  const { dispatch: invokerDispatch } = useInvoker();

  function dispatch(inputs: string[], source: string, lang: Language) {
    setResults(inputs.map(() => waiting));
    invokerDispatch(inputs, source, lang, (index: number, result: InvocationResult) => {
      setResults(res => {
        return [
          ...res.slice(0, index), 
          result, 
          ...res.slice(index + 1)
        ];
      });
    });
  }

  return { results, dispatch };
}
