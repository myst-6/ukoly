import type { Language } from "content";

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
		memoryLimitKb: number;
	}>,
	onResult: (data: TestResult) => void,
	onError?: (error: string) => void,
	turnstileToken?: string,
) {
	const ws = new WebSocket(process.env.NEXT_PUBLIC_API_WORKER_URL!);
	const HEARTBEAT_INTERVAL = 20000;

	// If no message is received for 5 seconds, close the connection
	let lastMessageTs: number = 0;
	const heartbeat = setInterval(() => {
		if (Date.now() - lastMessageTs > HEARTBEAT_INTERVAL) {
			ws.close();
			clearInterval(heartbeat);
		}
	}, HEARTBEAT_INTERVAL);

	ws.onopen = () => {
		// Send execution request with Turnstile token
		ws.send(
			JSON.stringify({
				code,
				language: language.apiName,
				testCases,
				turnstileToken,
			}),
		);
	};

	ws.onmessage = (event) => {
		const message: WebSocketMessage = JSON.parse(event.data);
		lastMessageTs = Date.now();

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
		onError?.(`Unknown websocket error. Please report this to Boris on discord.`);
	};

	ws.onclose = () => {
		console.log("WebSocket connection closed");
	};

	// If the connection is not established after 5 seconds, close the connection
	setTimeout(() => {
		if (ws.readyState === WebSocket.CONNECTING) {
			ws.close();
		}
	}, 5000);

	return () => ws.close();
}
