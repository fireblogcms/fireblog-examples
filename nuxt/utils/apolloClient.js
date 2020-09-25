// @see https://www.apollographql.com/docs/react/basics/setup.html
// @see https://www.apollographql.com/docs/react/api/apollo-client.html
import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import 'cross-fetch/polyfill'

// An httpLink than support uploading files.
const httpLink = createHttpLink({
  uri: process.env.FIREBLOG_GRAPHQL_ENDPOINT
})

const link = ApolloLink.from([httpLink])

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === 'development',
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'none'
    },
    query: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'none'
    },
    mutate: {
      errorPolicy: 'none'
    }
  }
})

export default client
