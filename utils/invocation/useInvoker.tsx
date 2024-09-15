import { InvocationResult, invoke } from "./invoke";
import { Language } from "content";

const TPS = 1; // how many Tests Per Second 

/**
 * @summary 
 * Runs code on a list of inputs and produces invocation results. 
 * The results are fed through a callback function. 
 * 
 * @param onResult 
 * A function that accepts two arguments. 
 * The hook calls the onResult function one time for each time the result of an invocation completes.
 * The first parameter `index` is the index of the test in the list of inputs. The second parameter `result` is the result of the invocation.
 * 
 * @dispatch​
 * A way of running invocation on a list of inputs for a given source code and language.
 */
export function useInvoker(
  onResult: (index: number, result: InvocationResult) => void
) {
  function dispatch(inputs: string[], source: string, language: Language) {
    inputs.forEach((input, index) => {
      console.log("Dispatching invocation for input", index);
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