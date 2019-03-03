
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList
}  from 'graphql';
import _ from 'lodash';
import AuthorType from'./AuthorType';
import BookType from './BookType';

const fakeData = require('../fakeData');


const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  fields: () => ({
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, { id }) => {
        return _.find(fakeData.books, (book) => (book.id === id));
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, { id }) => {
        return _.find(fakeData.authors, (author) => (author.id === id));
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: () => {
        return fakeData.books;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve: () => {
        return fakeData.authors;
      },
    }
  }),
});

export default QueryType;
