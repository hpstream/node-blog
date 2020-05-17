const crypto = require('crypto');
const md5 = crypto.createHash('md4')
let password = '123456';

md5.update(password)
console.log(crypto.getHashes())

console.log(md5.digest('hex').length);
