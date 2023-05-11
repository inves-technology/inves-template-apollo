import { startApolloServer } from './start-apollo-server';
import app from './app';
import serverless from 'serverless-http';

const binaryFiles: string[] = []; // e.g   ['application/pdf', 'image/png', 'image/jpg', 'image/x-icon', 'image/vnd.microsoft.icon'];

// eslint-disable-next-line @typescript-eslint/ban-types
const handler = async (event: Object, context: Object) => {
  console.log(`🚀 Starting Apollo on Koa on Lambda...`);
  const startedApp = await startApolloServer(app);
  const handler = serverless(startedApp, { binary: binaryFiles });
  const result = await handler(event, context);
  return result;
};

export { handler };
