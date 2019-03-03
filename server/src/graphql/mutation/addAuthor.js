import {
  GraphQLString,
  GraphQLInt,
} from 'graphql';
import AuthorType from '../type/AuthorType';
import Author from '../../model/Author';

const resolve = (_, args) => {
  const record = new Author({
    name: args.name,
    age: args.age
  });
  record.save();

  return record;
};

export default {
  type: AuthorType,
  args: {
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  },
  resolve,
};
