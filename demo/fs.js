const fs = require('fs');
const path = require('path');

function getFilesContent(fileName,callback) {
  const fullFileName = path.resolve(__dirname,'files',fileName);
  return new Promise((res, rej) => {
      // fs.readFile(fullFileName,function(err,data){
      //   if (err) rej(rej);
      //   res(data)

      // });
     var data = fs.readFileSync(fullFileName)
   
  })
}
getFilesContent('222')
// .then((data)=>{})
// .catch((err)=>{
//   console.log(err)
// })

// process.on('unhandledRejection', (reason, p) => {
//   // console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
//   // application specific logging, throwing an error, or other logic here
// });