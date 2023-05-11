import dotenv from 'dotenv';
import app from './app';
import { startApolloServer } from './start-apollo-server';

const port = 4001;
dotenv.config();
console.log(`🚀 Starting Apollo on Koa...`);
app.listen(port);
console.log(`🚀 Running at http://localhost:${port}`);

export default startApolloServer(app);
