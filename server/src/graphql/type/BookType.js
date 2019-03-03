import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql';
import AuthorType from'./AuthorType';
import Author from '../../model/Author';

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve: ({ authorId }) => {
        return Author.findById(authorId);
      },
    }
  }),
});


export default BookType;
