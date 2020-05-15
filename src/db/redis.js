// 玩一玩 redis.js
const redis = require('redis');
const redisConfig = require('./../confg/redisConfig')

// 单例
const redisClient = redis.createClient(redisConfig.port, redisConfig.host);
redisClient.on('error', (err) => {
  console.log(err)
})
function set(key,val) {
  redisClient.set(key, JSON.stringify(val), redis.print);
}

function get(key) {
 return new Promise((resolve,reject)=>{
   redisClient.get(key, (err, val) => {
     if (err) {
       reject(err);
       return
     }
     if(val===null){
       resolve(null)
     }
    try {
      resolve(JSON.parse(val))
    } catch (e) {
      resolve(val)
    }
    //  redisClient.quit();
   })
 })
}


module.exports = {
  get,
  set
}
