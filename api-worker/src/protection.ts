export interface TurnstileVerificationResult {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

export async function getClientIP(request: Request): Promise<string> {
  return (
    request.headers.get("CF-Connecting-IP") || request.headers.get("X-Forwarded-For") || "unknown"
  );
}

export async function checkRateLimit(clientIP: string, env: Env): Promise<Response> {
  const rateLimiterId = env.RATE_LIMITER.idFromName(clientIP);
  const rateLimiter = env.RATE_LIMITER.get(rateLimiterId);

  return rateLimiter.fetch(new Request("http://dummy/check"));
}

export async function verifyTurnstileToken(
  clientIP: string,
  token: string,
  env: Env,
): Promise<TurnstileVerificationResult> {
  // Skip verification in development environment
  if (env.ENVIRONMENT === "development") {
    return {
      success: true,
    };
  }

  // Check if secret key is available
  if (!env.TURNSTILE_SECRET_KEY) {
    console.error("TURNSTILE_SECRET_KEY not found in environment");
    return {
      success: false,
      "error-codes": ["missing-secret-key"],
    };
  }

  const formData = new FormData();
  formData.append("secret", await env.TURNSTILE_SECRET_KEY.get());
  formData.append("response", token);
  formData.append("remoteip", clientIP);

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Turnstile API request failed: ${response.statusText}`);
    }

    return (await response.json()) as TurnstileVerificationResult;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return {
      success: false,
      "error-codes": ["network-error"],
    };
  }
}
