export class RateLimiter {
  private state: DurableObjectState;

  constructor(state: DurableObjectState) {
    this.state = state;
  }

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/check") {
      return this.checkRateLimit();
    }

    return new Response("Not found", { status: 404 });
  }

  private async checkRateLimit(): Promise<Response> {
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute window
    const maxRequests = 5; // 5 batches per minute

    // Get current request timestamps
    let requests = (await this.state.storage.get<number[]>("requests")) || [];

    // Remove old requests outside the window
    requests = requests.filter((timestamp: number) => now - timestamp < windowMs);

    // Check if we're at the limit
    if (requests.length >= maxRequests) {
      const oldestRequest = requests[0];
      const retryAfter = Math.ceil((oldestRequest + windowMs - now) / 1000);

      return new Response("Rate limit exceeded", {
        status: 429,
        headers: {
          "Retry-After": retryAfter.toString(),
          "X-RateLimit-Limit": maxRequests.toString(),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": new Date(oldestRequest + windowMs).toISOString(),
        },
      });
    }

    // Add current request
    requests.push(now);
    await this.state.storage.put("requests", requests);

    return new Response("OK", {
      status: 200,
      headers: {
        "X-RateLimit-Limit": maxRequests.toString(),
        "X-RateLimit-Remaining": (maxRequests - requests.length).toString(),
        "X-RateLimit-Reset": new Date(now + windowMs).toISOString(),
      },
    });
  }
}
