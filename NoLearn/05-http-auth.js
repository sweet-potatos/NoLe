// 简单的session-cookie鉴权
const http = require('http');
const ejs = require('ejs');

const sessionObj = {}
http.createServer((req, res) => {
  const { url } = req;
  if (url === './favicon.ico') {
    return;
  } else {
    const getCookie = req.headers.cookie; // 获取cookie的方法
    const isLogin = getCookie ? getCookie.includes('status') : false;
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    if (getCookie && isLogin) {
      const cookie = dealCookieStr(getCookie);
      const infoId = +cookie.sessionKey;
      const info = sessionObj[infoId];

      ejs.renderFile('./views/index.ejs', {info: info}, (err, data) => {
        if(err) {
          res.statusCode = 500;
          res.end('Server Error 服务器出错');
        } else {
          res.statusCode = 200;
          res.end(data);
        }
      })

    } else {
      const sessionId = (Math.random() * 9999999).toFixed();
      res.setHeader('Set-Cookie', ['status=1', 'language=js', `sessionKey=${sessionId}`]) // 设置cookie
      sessionObj[sessionId] = {
        name: '鉴权',
        id: '001',
        judge: false,
      }
      res.end('第一次登录, 设置cookie');
    }
  }
}).listen(3000)

// 处理cookie字符串方法(将字符串转换成对象)
function dealCookieStr(cookieStr) {
  const cookieObj = {}
  const str = cookieStr.replace(/\s*/g,"");
  str.split(';').forEach(item => {
    if(!item) {
      return
    } else {
      const arr = item.split('=');
      const key = arr[0];
      const value = arr[1];
      cookieObj[key] = value;
    }
  })
  return cookieObj;
}

/* ejs模板,类似react和vue
 * <% %> 里面写script语句
 * <%= %> 输出变量
 * <%% %> 输出的都是字符串
 * 
 * ejs视频
 * https://www.bilibili.com/video/BV1t7411g7Cw?p=23
 * https://www.bilibili.com/video/BV1t7411g7Cw?p=24
*/
