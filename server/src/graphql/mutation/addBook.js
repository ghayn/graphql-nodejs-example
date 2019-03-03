import {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';
import BookType from '../type/BookType';
import Book from '../../model/Book';

const resolve = (_, args) => {
  const record = new Book({
    name: args.name,
    genre: args.genre,
    authorId: args.authorId,
  });
  record.save();

  return record;
};

export default {
  type: BookType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    genre: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve,
};
