// import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// const client = new ApolloClient({
//   link: new HttpLink({
//     uri: "https://hrsjqstntd.execute-api.ap-southeast-1.amazonaws.com/graphql", // Replace with your API Gateway endpoint
//   }),
//   cache: new InMemoryCache(),
// });

// export default client;

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://hrsjqstntd.execute-api.ap-southeast-1.amazonaws.com/graphql', // Local server URI
  }),
  cache: new InMemoryCache(),
});

export default client;
