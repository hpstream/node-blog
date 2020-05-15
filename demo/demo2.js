// 玩一下get 请求
const http = require('http');
const querystring = require('querystring')
const url = require('url')
const server = http.createServer((req, res) => {
  console.log(req.method)
  if(req.method === 'POST'){
    // 获取content-type 看看
    console.log('content type',req.headers['content-type'])

    let postData = ''
    req.on('data',chunk=>{
      console.log('data', chunk);
      postData += chunk.toString();
    })
    req.on('end',(data)=>{
      console.log('end', postData)
      res.end(postData)
    })
    return;
  }

  res.end('不支持get 请求')

})
server.listen(8000)
console.log('post ok');