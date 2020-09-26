import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(process.env.VUE_APP_FIREBLOG_GRAPHQL_ENDPOINT);

export default client;
