import Head from "next/head";
import "styles/global.css";
import "styles/fonts.css";
import "katex/dist/katex.min.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "theme";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>BIO Helper</title>
        <meta name="description" content="British Informatics Olympiad Editorials and Code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}