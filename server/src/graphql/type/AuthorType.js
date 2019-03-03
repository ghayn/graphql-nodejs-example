import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
} from 'graphql';

import BookType from './BookType.js';
const fakeData = require('../fakeData');


const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve: (self) => {
        return fakeData.books.filter(book => book.authorId === self.id);
      }
    }
  }),
});

export default AuthorType;
