import { ApolloClient, InMemoryCache } from "@apollo/client";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://api.graphql.jobs",
  cache: new InMemoryCache(),
});

export default client;
