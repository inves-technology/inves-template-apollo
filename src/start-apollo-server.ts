import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { schema } from './schema';
import http from 'http';
import Koa from 'koa';
import cors from '@koa/cors';
import { createContext } from './create-context';
import bodyParser from 'koa-bodyparser';
import { koaMiddleware } from '@as-integrations/koa';
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground';

export async function startApolloServer(app: Koa) {
  const httpServer = http.createServer(app.callback());
  const apolloServer = new ApolloServer({
    schema,
    csrfPrevention: true,
    introspection: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }), // Install a landing page plugin based on NODE_ENV
      ApolloServerPluginLandingPageGraphQLPlayground({ settings: { 'schema.polling.enable': false } }),
    ],
  });
  await apolloServer.start();
  app.use(cors());
  app.use(bodyParser());
  app.use(
    koaMiddleware(apolloServer, {
      context: async ({ ctx }) => {
        return createContext(ctx);
      },
    }),
  );
  return app;
}
