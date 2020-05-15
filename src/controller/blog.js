var { exec } = require('./../db/mysql')

async function getList(params) {
  var sql = `select title,DATE_FORMAT(createtime,'%Y-%m-%d %H:%i:%s') as createTime from blogs`;
   return await exec(sql);
}


async function updateBlog(params) {
  var sql = `update users set title=${params.title},content=${params.content} where id='1'`;
  return await exec(sql);
}

async function blogdetail(params) {
  var sql = `select * from blogs where id=${params.id}`;
  return await exec(sql);
}

async function createdetail(params) {
  var sql = `insert into blogs (title,content,author) values ('${params.title}','${params.content}','${params.author}');`;
  return await exec(sql);
}

async function deleteblog(params) {
  var sql = `delete * from blogs whrer id=${params.id};`;
  return await exec(sql);
}



module.exports = {
  getList, createdetail, deleteblog, blogdetail, updateBlog
  
}