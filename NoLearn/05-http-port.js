const http = require('http')

http.createServer((req, res) => {
  const { url, method } = req;
  if (url === '/user' && method === 'GET'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
    // res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods","GET");
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    res.end(JSON.stringify({
      name: 'user',
      age: 20,
      birthDay: '1997.10.10',
    }));
  } else if (url === '/test' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader('Set-Cookie', 'cokie=values111');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    res.end(JSON.stringify({
      tip: '尝试复杂请求接口',
      val: 'xxxxxx',
    }));
  } else if (url === '/test' && method === 'OPTIONS') {
    res.setHeader('Headers', 'X-Token,Content-Type');
  }
  res.end();
}).listen(3000);

// 预检请求方法OPTIONS，简单请求的话是不用经过预检的，如不是则会先经过预检请求