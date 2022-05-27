import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

const root = createRoot(document.getElementById('root'))
root.render(
  <ApolloProvider client={client}>
    <App client={client}/>
  </ApolloProvider>
);

