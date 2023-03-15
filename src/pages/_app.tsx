import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "@theme/index";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme} cssVarsRoot="body">
        <Component {...pageProps} />
        <Analytics />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
