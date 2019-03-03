import React, { Component } from 'react';
import ApolloClient from "apollo-client";
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost: 2333/graphql" }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>Reading List</h1>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
