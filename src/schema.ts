import { makeExecutableSchema } from '@graphql-tools/schema';
import merge from 'lodash.merge';
import { helloWorldTypeDefs, helloWorldResolvers } from './hello-world-schema';

export const query = `#graphql
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const resolvers = {};

const execSchema = makeExecutableSchema({
  typeDefs: [query, helloWorldTypeDefs],
  resolvers: merge(resolvers, helloWorldResolvers),
});

export const schema = execSchema;
