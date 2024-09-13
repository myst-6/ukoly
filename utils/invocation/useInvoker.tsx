import { InvocationResult, invoke } from "./invoke";
import { Language } from "components";

const TPS = 3; // how many Tests Per Second 

export function useInvoker(
  onResult: (index: number, result: InvocationResult) => void
) {
  function dispatch(inputs: string[], source: string, language: Language) {
    inputs.forEach((input, index) => {
      const batch = Math.floor(index / TPS);
      setTimeout(() => {
        invoke(source, input, language).then(result => {
          onResult(index, result);
        }).catch(error => {
          console.error("Severe error, how could this have happened?");
          console.error(error);
        })
      }, batch * 1000);
    });
  }

  return { dispatch };
};