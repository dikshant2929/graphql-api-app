import { loadGQLFile } from '../../utils/gqlLoader';
import userResolvers from './user.resolvers';

export default {
  resolvers: userResolvers,
  typeDefs: loadGQLFile('user/user.graphql')
};