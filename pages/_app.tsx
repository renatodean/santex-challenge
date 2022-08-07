import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../apolloClient";
import { StorageProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StorageProvider>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </StorageProvider>
  );
}

export default MyApp;
