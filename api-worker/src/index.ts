import { getSandbox } from "@cloudflare/sandbox";
import type {
  ExecutionInput,
  ExecutionResult,
  Language,
  LanguageConfig,
} from "./execution-sandbox";
import { ExecutionSandbox, JavaSandbox, RustSandbox, LANGUAGE_CONFIG, SandboxRuntime } from "./execution-sandbox";
import { checkRateLimit, getClientIP, verifyTurnstileToken } from "./protection";
import { RateLimiter } from "./rate-limiter";

export { RateLimiter, ExecutionSandbox, JavaSandbox, RustSandbox };

interface ExecuteRequest {
  code: string;
  language: Language;
  testCases: Array<{
    stdin: string;
    timeLimitMs: number;
    memoryLimitKb: number;
  }>;
  turnstileToken?: string;
  authToken?: string;
}

type TestResult = ExecutionResult & { testCaseIndex: number, compilationFailed: boolean };

type WebSocketMessage = {
  type: "result" | "error" | "complete" | "compilation_error";
  data?: TestResult | string;
  totalTestCases?: number;
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
      "Access-Control-Allow-Headers":
        "Content-Type, Upgrade, Connection, Sec-WebSocket-Key, Sec-WebSocket-Version, Sec-WebSocket-Protocol",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    if (url.pathname === "/api/execute-stream") {
      const upgradeHeader = request.headers.get("Upgrade");
      if (upgradeHeader !== "websocket") {
        return new Response("Expected Upgrade: websocket", { status: 426 });
      }

      const webSocketPair = new WebSocketPair();
      const [client, server] = Object.values(webSocketPair);

      server.accept();
      this.handleWebSocketConnection(await getClientIP(request), server, env);

      return new Response(null, {
        status: 101,
        webSocket: client,
      });
    }

    return new Response("Not found", {
      status: 404,
      headers: corsHeaders,
    });
  },

  async handleWebSocketConnection(clientIP: string, webSocket: WebSocket, env: Env) {
    webSocket.addEventListener("message", async (event) => {
      try {
        const data = JSON.parse(event.data as string) as ExecuteRequest;

        if (!data.code || !data.language || !data.testCases) {
          webSocket.send(
            JSON.stringify({
              type: "error",
              data: "Invalid request: missing required fields",
            } as WebSocketMessage),
          );
          return;
        }

        /*
        // Check authentication
        if (!data.authToken) {
          webSocket.send(
            JSON.stringify({
              type: "error",
              data: "Authentication required. Please log in to execute code.",
            } as WebSocketMessage),
          );
          return;
        }

        // Verify auth token with auth worker
        const authVerificationResult = await this.verifyAuthToken(data.authToken, env);
        if (!authVerificationResult.success) {
          webSocket.send(
            JSON.stringify({
              type: "error",
              data: "Authentication failed. Please log in again.",
            } as WebSocketMessage),
          );
          return;
        }*/

        if (!data.turnstileToken) {
          webSocket.send(
            JSON.stringify({
              type: "error",
              data: "Security verification required. Please complete the Turnstile challenge.",
            } as WebSocketMessage),
          );
          return;
        }

        const turnstileResult = await verifyTurnstileToken(clientIP, data.turnstileToken, env);

        if (!turnstileResult.success) {
          webSocket.send(
            JSON.stringify({
              type: "error",
              data: `Security verification failed: ${turnstileResult["error-codes"]?.join(", ") || "Invalid token"}`,
            } as WebSocketMessage),
          );
          return;
        }

        const rateLimitResponse = await checkRateLimit(clientIP, env);

        if (rateLimitResponse.status !== 200) {
          webSocket.send(
            JSON.stringify({
              type: "error",
              data: "Rate limit exceeded",
            } satisfies WebSocketMessage),
          );
          return;
        }

        if (data.testCases.length > 20) {
          webSocket.send(
            JSON.stringify({
              type: "error",
              data: `Too many test cases. Maximum 20 allowed, got ${data.testCases.length}`,
            } satisfies WebSocketMessage),
          );
          return;
        }

        const languageConfig = LANGUAGE_CONFIG[data.language];
        if (!languageConfig) {
          webSocket.send(
            JSON.stringify({
              type: "error",
              data: "Language not supported",
            } satisfies WebSocketMessage),
          );
          return;
        }

        await this.executeCodeStreaming(data.code, data.testCases, languageConfig, env, webSocket);
      } catch (error) {
        console.error("WebSocket message error:", error);
        webSocket.send(
          JSON.stringify({
            type: "error",
            data: error instanceof Error ? error.message : "Unknown error",
          } satisfies WebSocketMessage),
        );
      }
    });
  },

  async executeCodeStreaming(
    code: string,
    testCases: Array<ExecutionInput>,
    languageConfig: LanguageConfig,
    env: Env,
    webSocket: WebSocket,
  ): Promise<void> {
    const sandboxId = `exec-stream-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const sandbox = getSandbox(
      env[languageConfig.bindingName],
      sandboxId,
    );
    const runtime = new SandboxRuntime(sandbox, languageConfig, code);

    if (languageConfig.isCompiled) {
      const compileResult = await runtime.compile();
      console.log({compileResult});
      if (compileResult.exitCode !== 0) {
        // send CE for each test case
        for (let i = 0; i < testCases.length; i++) {
          webSocket.send(JSON.stringify({
            type: "result", data: {
              ...compileResult,
              compilationFailed: true,
              memoryExceeded: false,
              memoryKB: 0,
              timeMS: 0,
              timedOut: false,
              testCaseIndex: i,
            } satisfies TestResult
          } satisfies WebSocketMessage));
        }
        return;
      }
    }

    for (let i = 0; i < testCases.length; i++) {
      const testCase = testCases[i];

      try {
        const executionResult = await runtime.run(testCase);

        console.log({executionResult})

        webSocket.send(
          JSON.stringify({
            type: "result",
            data: {
              ...executionResult,
              testCaseIndex: i,
              compilationFailed: false,
            },
            totalTestCases: testCases.length,
          } satisfies WebSocketMessage),
        );
      } catch (testError) {
        console.error(`Error executing test case ${i}:`, testError);

        const errorResult: ExecutionResult = {
          stdout: "",
          stderr: "",
          exitCode: 1,
          memoryKB: 0,
          timeMS: 0,
          timedOut: false,
          memoryExceeded: false,
          error: testError instanceof Error ? testError.message : "Unknown error",
        };

        webSocket.send(
          JSON.stringify({
            type: "result",
            data: {
              ...errorResult,
              testCaseIndex: i,
              compilationFailed: false,
            },
            totalTestCases: testCases.length,
          } satisfies WebSocketMessage),
        );
      }
    }

    webSocket.send(
      JSON.stringify({
        type: "complete",
      } satisfies WebSocketMessage),
    );

    await sandbox.destroy();
  },

  async verifyAuthToken(authToken: string, env: Env): Promise<{ success: boolean }> {
    try {
      // Make request to auth worker to verify token
      // TODO put this in env
      const authWorkerUrl = 'http://localhost:3002';
      const response = await fetch(`${authWorkerUrl}/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });

      const result = await response.json() as { success?: boolean };
      return { success: result.success || false };
    } catch (error) {
      console.error('Auth verification error:', error);
      return { success: false };
    }
  },
};
