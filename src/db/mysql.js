const mysql = require('mysql');
const dbConfig = require('./../confg/db')

const con = mysql.createConnection(dbConfig)

con.connect();
// const sql = 'select * from users;'

function exec(sql) {
 return new Promise(function(resolve,reject) {
   con.query(sql, (err, result) => {
     if (err) {
       reject(err)
       return;
     }
     resolve(result)
   })
 })
}

module.exports = {
  exec
}

// con.end()  在项目中一直链接不用断开连接