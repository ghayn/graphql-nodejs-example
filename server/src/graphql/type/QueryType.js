
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList
}  from 'graphql';
import AuthorType from'./AuthorType';
import BookType from './BookType';
import Author from '../../model/Author';
import Book from '../../model/Book';

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  fields: () => ({
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve: (_, { id }) => {
        return Book.findById(id);
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve: (_, { id }) => {
        return Author.findById(id);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: () => {
        return Book.find({});
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve: () => {
        return Author.find({});
      },
    }
  }),
});

export default QueryType;
