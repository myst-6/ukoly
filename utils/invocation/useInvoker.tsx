import { useState } from "react";
import { invoke } from "./invoke";
import type { Language } from "content";
import { waiting, type InvocationResult } from "./types";
import { useRunner } from "./useRunner";
import { streamExecution } from "./stream";

/**
 * @summary 
 * Runs code on a single input and produces the invocation result. 
 * The result is fed through a callback function. 
 * 
 * @dispatch​
 * A way of running invocation on a single inputs for a given source code and language.
 */
export function useInvoker() {
  const { dispatch: dispatchRunner, results } = useRunner();

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
   * @param timeLimitMs
   * The time limit in milliseconds.
   * 
   * @param memoryLimitKb
   * The memory limit in kilobytes.
   * 
   * @param onResult 
   * A function that accepts two arguments. 
   * The hook calls the onResult function one time for each time the result of an invocation completes.
   * The first parameter `index` is the index of the test in the list of inputs. The second parameter `result` is the result of the invocation.
   */
  function dispatch(
    input: string, 
    source: string, 
    language: Language,
    timeLimitMs?: number,
    memoryLimitKb?: number,
  ) {
    dispatchRunner([input], source, language, timeLimitMs, memoryLimitKb);
  }

  return { dispatch, result: results[0] || waiting };
};