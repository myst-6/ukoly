import { useState } from "react";
import type { Language } from "content";
import { streamExecution } from "./stream";
import { waiting, type InvocationResult } from "./types";

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
	 * @param memoryLimit (optional)
	 * The memory limit, in KB, for the code to run in. Defaults to 1GB.
	 *
	 * @param onResult
	 * A function that accepts two arguments.
	 * The hook calls the onResult function one time for each time the result of an invocation completes.
	 * The first parameter `index` is the index of the test in the list of inputs. The second parameter `result` is the result of the invocation.
	 */
	function dispatch(
		inputs: string[],
		source: string,
		language: Language,
		timeLimit?: number,
		memoryLimit?: number,
	) {
		setResults(inputs.map(() => waiting));
		streamExecution(
			source,
			language,
			inputs.map((input) => ({
				stdin: input,
				timeLimitMs: timeLimit ?? 1000,
				memoryLimit: memoryLimit ?? 1024 * 1024, // 1GB
			})),
			(result) => {
				setResults((prev) => {
					const newResults = [...prev];
					newResults[result.testCaseIndex] = {
						status: result.timedOut
							? "TLE"
							: result.memoryExceeded
								? "MLE"
								: result.compilationFailed
									? "CE"
									: result.exitCode === 0
										? "OK"
										: "RE",
						stdout: result.stdout,
						message: result.timedOut
							? `Time limit exceeded: ${result.timeMS}ms`
							: result.memoryExceeded
								? `Memory limit exceeded: ${~~(result.memoryKB / 1000)}MB`
								: result.compilationFailed
									? result.stderr
									: result.exitCode === 0
										? result.stdout
										: result.stderr,
						time: result.timeMS,
						memory: ~~(result.memoryKB / 1000),
					};
					return newResults;
				});
			},
			(error) =>
				setResults((prev) => {
					const newResults = [...prev];
					return newResults.map((result) => {
						if (result.status === "TS") {
							return {
								...result,
								status: "RJ",
								message: `Sandbox error: ${error}. Please report this to Boris on discord.`,
							};
						} else {
							return result;
						}
					});
				}),
		);
	}

	return { results, dispatch };
}
