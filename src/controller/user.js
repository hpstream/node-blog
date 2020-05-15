var {exec} = require('./../db/mysql')

async function getUserList(params) {
  var sql = 'select * from users;'
  return await exec(sql);
}

module.exports = {
  getUserList
}