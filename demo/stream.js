const fs = require('fs');
const path = require('path')

var readFile = path.join(__dirname, 'text1.txt')
var writeFile = path.join(__dirname, 'text2.txt')

var readStream = fs.createReadStream(readFile)
var writeStream = fs.createWriteStream(writeFile)
readStream.pipe(writeStream);
readStream.on('data',(chunk)=>{
    console.log(chunk)
})
readStream.on('end',()=>{
  console.log('完成')
})




// var fs = require('fs');
// const path = require('path')

// var fileReadStream = fs.createReadStream(path.join(__dirname, 'text1.txt'));
// var fileWriteStream = fs.createWriteStream(path.join(__dirname, 'text2.txt'));
// fileReadStream.pipe(fileWriteStream);

// fileWriteStream.on('close', function () {
//   console.log('copy over');

// })