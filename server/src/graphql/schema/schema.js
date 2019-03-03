import { GraphQLSchema } from 'graphql';
import QueryType from '../type/QueryType';
import MutationType from '../type/MutationType';


module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
