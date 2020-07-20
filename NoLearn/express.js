const express = require('express');
const use_express = express();

use_express.get('/', (req, res) => {
  res.send('hello express');
})

use_express.get('/page', (req, res) => {
  res.send(JSON.stringify({name: '测试'}));
})

use_express.listen(3000)