import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@theme/index";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
