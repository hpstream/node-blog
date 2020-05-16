const fs = require('fs')
const path = require('path');

function createWriteStream(fileName) {
  const fullFileName = path.join(__dirname, '../../logs', fileName);
  const writeStream = fs.createWriteStream(fullFileName,{
    flags:'a' // 表示追加
  })
  return writeStream;
}

const accessWriteStream = createWriteStream('access.log');
function access(log) {
  writeLog(accessWriteStream, log)
}
function writeLog(writeStream,log) {
  writeStream.write(log+'\n')
}

access('31312')
module.exports = {
  access
}