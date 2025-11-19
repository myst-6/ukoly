declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: string;
    NEXT_PUBLIC_API_WORKER_URL: string;
    NEXT_PUBLIC_POSTHOG_KEY: string;
    NEXT_PUBLIC_POSTHOG_HOST: string;
  }
} 