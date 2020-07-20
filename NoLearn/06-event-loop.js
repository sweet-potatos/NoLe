(new Promise(resolve => {
  console.log('11111 resolve');
  resolve();
}))
.then(() => {
  console.log('22222 Promise then');
})

setImmediate(() => {
  console.log('33333 setImmediate');
})

setTimeout(() => {
  console.log('44444 setTimeout');
}, 0);

process.nextTick(() => {
  console.log('55555 nextTick');
});