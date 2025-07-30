import type { Language } from "content";

const API_WORKER_URL = "wss://api-worker.mborishall.workers.dev/api/execute-stream";

interface ExecutionResult {
	stdout: string;
	stderr: string;
	exitCode: number;
	memoryKB: number;
	timeMS: number;
	timedOut: boolean;
	memoryExceeded: boolean;
	error?: string;
}

type TestResult = ExecutionResult & { testCaseIndex: number; compilationFailed: boolean };

type WebSocketMessage = {
	type: "result" | "error" | "complete";
	data?: TestResult | string;
	totalTestCases?: number;
};

export function streamExecution(
	code: string,
	language: Language,
	testCases: Array<{
		stdin: string;
		timeLimitMs: number;
		memoryLimit: number;
	}>,
	onResult: (data: TestResult) => void,
	onError?: (error: string) => void,
) {
	const ws = new WebSocket(API_WORKER_URL);

	ws.onopen = () => {
		// Send execution request with Turnstile token
		ws.send(
			JSON.stringify({
				code,
				language: language.apiName,
				testCases,
			}),
		);
	};

	ws.onmessage = (event) => {
		const message: WebSocketMessage = JSON.parse(event.data);

		switch (message.type) {
			case "result": {
				const result = message.data as TestResult;
				onResult(result);
				break;
			}
			case "error": 
				onError?.(message.data as string);
		}

	};

	ws.onerror = (error) => {
		console.error("WebSocket error:", error);
		onError?.(error.toString());
	};

	ws.onclose = () => {
		console.log("WebSocket connection closed");
	};

	return () => ws.close();
}
