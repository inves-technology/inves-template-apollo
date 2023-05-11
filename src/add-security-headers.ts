import helmet from 'koa-helmet';
import Koa from 'koa';

export function addSecurityHeaders(app: Koa) {
  app.use(helmet());
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        baseUri: ["'self'"],
        fontSrc: ["'self'", 'fonts.gstatic.com'],
        frameSrc: ["'none'"],
        mediaSrc: ["'none'"],
        imgSrc: ["'self'", 'cdn.jsdelivr.net', 'data:'],
        styleSrc: ["'self'", 'fonts.googleapis.com', 'cdn.jsdelivr.net', "'unsafe-inline'"],
        connectSrc: ["'self'"],
        scriptSrc: ["'self'", 'cdn.jsdelivr.net', "'unsafe-inline'"],
        objectSrc: ["'none'"],
        childSrc: ["'none'"],
        formAction: ["'none'"],
        frameAncestors: ["'none'"],
      },
    }),
  );
  app.use(async (ctx, next) => {
    ctx.set('Permissions-Policy', 'geolocation=(), interest-cohort=()');
    ctx.set('Allow', ['GET', 'POST']);
    await next();
  });
}
