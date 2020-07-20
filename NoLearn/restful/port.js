const fs = require('fs');
const path = require('path');
const koa = require('koa');
const app = new koa();

const file_path = path.resolve(__dirname, 'data.json');

const 