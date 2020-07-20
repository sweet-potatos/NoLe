const buffer1 = Buffer.alloc(10);
console.log(buffer1);

const buffer2 = Buffer.alloc(10, 20);
console.log(buffer2);

const buffer3 = Buffer.from([1, 2, 3]);
console.log(buffer3);

const buffer4 = Buffer.from('test');
console.log(buffer4);