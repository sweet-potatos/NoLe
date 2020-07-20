const Koa = require('koa');
const app = new Koa();

// 响应时间输出
app.use(async (ctx, next) => {
  console.log('1');
  await next();
  console.log('2');
  const rf = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${ctx}`);
});

// 响应计时
app.use(async (ctx, next) => {
  console.log('3');
  const start = Date.now();
  await next();
  console.log('4');
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  console.log(`响应时间${ms}ms`)
})

// 错误处理1
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status || error.statusCode || 500;
    ctx.body = error.message;
  }
})

// 响应
app.use(async ctx => {
  console.log('5');
  // await test();
  ctx.status = 200;
  ctx.type = 'html';
  ctx.body = 'Hello!!';
})

// 错误处理2
app.on('error', err => {
  console.log(err);
})


app.listen(3000);