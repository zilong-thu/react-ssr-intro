const path   = require('path');
const Koa    = require('koa');
const app    = new Koa();
const ReactDOMServer = require('react-dom/server');
const React  = require('react');

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(async (ctx, next) => {
  const PageFunc = require('../client/pages/hello/index.js').default;

  const str = ReactDOMServer.renderToString(<PageFunc />);
  console.log(str);
  ctx.body = str;
});

const port = 7002;
app.listen(port);
console.log(`server is running at: \nhttp://localhost:${port}`);
