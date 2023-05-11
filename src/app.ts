import { addSecurityHeaders } from './add-security-headers';
import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

// security headers
addSecurityHeaders(app);

// routes
app.use(router.routes()).use(router.allowedMethods());

export default app;
