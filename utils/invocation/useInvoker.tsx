import type { Language } from "content";
import { waiting } from "./types";
import { useRunner } from "./useRunner";

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
   * @param turnstileToken
   * The Cloudflare Turnstile token for security verification.
   * 
   * @param timeLimitMs
   * The time limit in milliseconds.
   * 
   * @param memoryLimitKb
   * The memory limit in kilobytes.
   */
  function dispatch(
    input: string, 
    source: string, 
    language: Language,
    turnstileToken: string,
    timeLimitMs?: number,
    memoryLimitKb?: number,
  ) {
    dispatchRunner([input], source, language, turnstileToken, timeLimitMs, memoryLimitKb);
  }

  return { dispatch, result: results[0] || waiting };
};