const koa = require('koa');
const app = new koa();

const mid1 = async(ctx, next) => {
  ctx.body = 'Hello';
  console.log('1');
  await next();
  ctx.body = ctx.body + '!!!';
  console.log('2');
}

const mid2 = async(ctx, next) => {
  ctx.type = 'text/html;charset=utf-8';
  console.log('3');
  await next();
  console.log('4');
}

const mid3 = async(ctx, next) => {
  ctx.body = ctx.body + 'World';
  console.log('5');
  await next();
}

app.use(mid1);
app.use(mid2);
app.use(mid3);

app.listen(3000);