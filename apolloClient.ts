import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://demo.vendure.io/shop-api",
  cache: new InMemoryCache(),
});
