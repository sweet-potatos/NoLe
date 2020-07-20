const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const { url, method } = req;

  if(url === '/' && method === 'GET') {
    fs.readFile('./test.html', (err, data) => {
      if(err) {
        res.writeHead(500, {
          'Content-Type': 'text/html;charset=utf-8'
        });
        res.end('Server Error 服务器出错');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    })
  } else if(url === '/page' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    res.end(JSON.stringify({name: 'user'}));
  }
}).listen(3000);