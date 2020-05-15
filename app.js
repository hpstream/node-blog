const querystring = require('querystring');
var blogRouter = require('./src/router/bolg')
var userRouter = require('./src/router/user')

const getPostData = (req, res) => {
  return new Promise((resolve, reject) => {
    if (req.method === "POST") {
      let postData = ''
      req.on('data', chunk => {
        postData += chunk.toString();
      })
      req.on('end', (data) => {
        req.body = JSON.parse(postData)
        resolve(req.body)
        // res.end(postData)
      })
    } else {
      resolve({})
    }

  })
}
const handelCookie = function (req, res) {
  // 
  req.cookie = {}
  var cookie = req.headers.cookie
  if (!cookie) return;
  var cookies = cookie.split(';')
  req.cookie = {}
  cookies.map((item) => {
    var arr = item.split('=')
    req.cookie[arr[0].trim()] = arr[1].trim()
  })

}


module.exports = async (req, res) => {
  res.setHeader('Content-type', 'application/json');
  // 处理cookie
  handelCookie(req, res);

  // 使用json 的格式返回数据
  const url = req.url;
  req.path = url.split('?')[0]
  req.query = querystring.parse(url.split('?')[1]);
  await getPostData(req, res)
  let resData;
  resData = await blogRouter(req, res)
  if (resData) {
    res.end(JSON.stringify(resData));
    return;
  }

  resData = await userRouter(req, res)


  if (resData) {
    res.end(JSON.stringify(resData));
    return;
  }

  res.writeHead(404, { "Content-type": 'text/plain' })
  res.write('404 Not Found\n')
  res.end();
}