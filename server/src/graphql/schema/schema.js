const graphql = require('graphql');
const QueryType = require('../type/QueryType');

const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: QueryType,
});
