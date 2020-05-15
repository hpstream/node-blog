// 玩一下get 请求
const http = require('http');
const querystring = require('querystring')
const url = require('url')
const server = http.createServer((req,res)=>{
  res.method //  获取 请求方法
  req.url // 获取请求链接

  var json = querystring.parse(req.url.split('?')[1])
  console.log(req.url);
  res.end(JSON.stringify(json))

})
server.listen(8000)
console.log('ok');