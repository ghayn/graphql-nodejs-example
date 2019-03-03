import { GraphQLObjectType }  from 'graphql';
import addAuthor from '../mutation/addAuthor';
import addBook from '../mutation/addBook';

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addAuthor,
    addBook,
  }),
});

export default MutationType;
