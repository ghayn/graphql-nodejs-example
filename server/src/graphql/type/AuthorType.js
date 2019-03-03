import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
} from 'graphql';
import Book from '../../model/Book';
import BookType from './BookType.js';


const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve: (self) => {
        return Book.find({ authorId: self.id });
      },
    }
  }),
});

export default AuthorType;
