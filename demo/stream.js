// 标准输入输出流试操作
// process.stdin.pipe(process.stdout)

// 服务器以流的方式接受数据
const http =  require('http');
const path =  require('path');
var fs = require('fs')
var dist = path.join(__dirname,'text1.txt')

const server = http.createServer((req,res)=>{
  var distStream = fs.createReadStream(dist) 
  distStream.pipe(res)
})
server.listen(8000)

// node 读写流
// const fs = require('fs');
// const path = require('path')

// var readFile = path.join(__dirname, 'text1.txt')
// var writeFile = path.join(__dirname, 'text2.txt')

// var readStream = fs.createReadStream(readFile)
// var writeStream = fs.createWriteStream(writeFile)
// readStream.pipe(writeStream);
// readStream.on('data',(chunk)=>{
//     console.log(chunk)
// })
// readStream.on('end',()=>{
//   console.log('完成')
// })


