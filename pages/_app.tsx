import Head from "next/head";
import "styles/global.css";
import "styles/fonts.css";
import "katex/dist/katex.min.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "theme";
import type { AppProps } from "next/app";
import { useEffect } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: {
        sitekey: string;
        size?: 'normal' | 'invisible' | 'compact';
        callback?: (token: string) => void;
        'error-callback'?: (error: string) => void;
        'expired-callback'?: () => void;
      }) => string;
      reset: (widgetId: string) => void;
      getResponse: (widgetId: string) => string;
    };
    onTurnstileLoad?: () => void;
  }
}

function TurnstileProvider() {
  useEffect(() => {
    // Only load Turnstile if site key is provided
    if (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) {
      console.warn("NEXT_PUBLIC_TURNSTILE_SITE_KEY not provided");
      return;
    }

    // Check if script is already loaded
    if (document.querySelector('script[src*="turnstile"]')) {
      return;
    }

    // Create and load Turnstile script
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad";
    script.async = true;
    script.defer = true;

    // Set up global callback
    window.onTurnstileLoad = () => {
      console.log("Turnstile loaded successfully");
      // Turnstile is now available globally for use by other components
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup callback
      if (window.onTurnstileLoad) {
        delete window.onTurnstileLoad;
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>BIO Helper</title>
        <meta name="description" content="British Informatics Olympiad Editorials and Code" />
        <meta name="viewport" content="width=1024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TurnstileProvider />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}