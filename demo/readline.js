const fs = require('fs');
const path = require('path');
const readline =  require('readline');

const rl = readline.createInterface({
  input : fs.createReadStream(path.join(__dirname,'./demo1.js'))
})
rl.on('line',(lineData)=>{
  console.log(lineData)
})
rl.on('close',()=>{

})
