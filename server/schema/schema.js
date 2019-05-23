const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQuery = require('./root_query');
const RootMutation = require('./root_mutation');

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});