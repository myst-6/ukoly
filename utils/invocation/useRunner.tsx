import { useState } from "react";
import { InvocationResult, waiting } from "./invoke";
import { useInvoker } from "./useInvoker";
import { Language } from "components";

export function useRunner() {
  const [results, setResults] = useState<InvocationResult[]>([]);

  const { dispatch: invokerDispatch } = useInvoker(
    (index: number, result: InvocationResult) => {
      setResults(res => {
        return [
          ...res.slice(0, index), 
          result, 
          ...res.slice(index + 1)
        ];
      });
    }
  );

  function dispatch(inputs: string[], source: string, lang: Language) {
    setResults(inputs.map(() => waiting));
    invokerDispatch(inputs, source, lang);
  }

  return { results, dispatch };
}
