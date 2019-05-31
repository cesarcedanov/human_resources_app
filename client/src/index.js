import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";

import App from "./components/App";

// REQUIRED FOR APOLLO CLIENT 2.0
const cache = new InMemoryCache({
  dataIdFromObject: o => o.id
});

const link = new HttpLink({
  uri: "/graphql"
});

const client = new ApolloClient({
  cache,
  link
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
