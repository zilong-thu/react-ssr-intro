const Koa            = require('koa');
const React          = require('react');
const ReactDOMServer = require('react-dom/server');
const Router         = require('koa-router');

const app = new Koa();
const router = new Router();

// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

router.get('/hello-ssr', (ctx, next) => {
  const PageFunc = require('./pages/hello-ssr/index.js').default;
  ctx.body = ReactDOMServer.renderToString(<PageFunc />);
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const port = 7002;
app.listen(port);
console.log(`server is running at: \nhttp://localhost:${port}`);
