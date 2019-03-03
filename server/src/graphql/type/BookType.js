import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql';
import _ from 'lodash';
import AuthorType from'./AuthorType';

const fakeData = require('../fakeData');

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve: (parent) => {
        return _.find(fakeData.authors, (author) => (
          author.id === parent.authorId
        ));
      },
    }
  }),
});


export default BookType;
