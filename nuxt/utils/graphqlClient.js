import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(process.env.FIREBLOG_GRAPHQL_ENDPOINT)

export default client
