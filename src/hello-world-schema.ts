import { Context } from './create-context';
import { HelloWorldResponse, QueryHelloWorldArgs } from './generated/inves-types';
import { helloWorld } from './hello-world';

export const helloWorldTypeDefs = `#graphql
  input HelloWorldInput {
    name: String!
  }

  type HelloWorldResponse {
    result: String
  }

  extend type Query {
    helloWorld(input: HelloWorldInput!): HelloWorldResponse
  }
`;

export const helloWorldResolvers = {
  Query: {
    async helloWorld(_obj: unknown, args: QueryHelloWorldArgs, context: Context): Promise<HelloWorldResponse> {
      return helloWorld(context, args.input.name);
    },
  },
};
