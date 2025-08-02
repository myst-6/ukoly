import { useCallback, useEffect, useRef, useState } from "react";

interface TurnstileState {
  isLoaded: boolean;
  isVerified: boolean;
  token: string | null;
  error: string | null;
}

export function useTurnstile() {
  const [state, setState] = useState<TurnstileState>({
    isLoaded: false,
    isVerified: false,
    token: null,
    error: null,
  });

  const widgetRef = useRef<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const renderTurnstile = useCallback(() => {
    if (!window.turnstile || !containerRef.current || widgetRef.current) {
      return;
    }

    try {
      const widgetId = window.turnstile.render(containerRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
        size: "invisible",
        callback: (token: string) => {
          setState(prev => ({
            ...prev,
            isVerified: true,
            token,
            error: null,
          }));
        },
        "error-callback": (error: string) => {
          setState(prev => ({
            ...prev,
            isVerified: false,
            token: null,
            error: `Turnstile error: ${error}`,
          }));
        },
        "expired-callback": () => {
          setState(prev => ({
            ...prev,
            isVerified: false,
            token: null,
            error: "Turnstile token expired. Please verify again.",
          }));
        },
      });

      widgetRef.current = widgetId;
    } catch (error) {
      console.error("Failed to render Turnstile:", error);
      setState(prev => ({
        ...prev,
        error: "Failed to initialize security verification",
      }));
    }
  }, []);

  const reset = useCallback(() => {
    if (window.turnstile && widgetRef.current) {
      window.turnstile.reset(widgetRef.current);
      setState(prev => ({
        ...prev,
        isVerified: false,
        token: null,
        error: null,
      }));
    }
  }, []);

  const getToken = useCallback(() => {
    if (!window.turnstile || !widgetRef.current) {
      return null;
    }

    try {
      // Get the current response token
      return window.turnstile.getResponse(widgetRef.current);
    } catch (error) {
      console.error("Failed to get Turnstile token:", error);
      return null;
    }
  }, []);

  useEffect(() => {
    // Wait for Turnstile to be loaded globally
    const checkTurnstile = () => {
      if (window.turnstile) {
        setState(prev => ({ ...prev, isLoaded: true }));
        renderTurnstile();
      } else {
        // Check again in 100ms
        setTimeout(checkTurnstile, 100);
      }
    };

    checkTurnstile();
  }, [renderTurnstile]);

  return {
    ...state,
    reset,
    getToken,
    containerRef,
  };
}
