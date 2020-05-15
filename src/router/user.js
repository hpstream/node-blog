var { getUserList } = require('./../controller/user')
var { successModel, errorModel } = require('./../model/resModel')
const handleUserRouter = async (req, res) => {
  const path = req.path;
  const method = req.method;
  if (method === "POST") {
    if (path === '/api/user/login') {
      return {
        msg: '登录接口'
      }
    }
  }

    // 测试cookie 和 session 的使用
  if (method === "GET") {
    if (path === '/api/user/list') {
      if (req.cookie.bundleId) {
        var data = await getUserList()
        return successModel(data);
      } else {
        return errorModel(null, '还未登录');
      }

    }
  }

  if (method === "GET") {
    if (path === '/api/user/login') {
      var { username, password } = req.query;
      if (username === 'zhangsan' && password === '123') {
        var bundleId = (new Date()).getTime() + '_' + Math.random()
        res.setHeader('Set-Cookie', [`bundleId=${bundleId}; path=/; expires=${getCookieExpires()}`]);
        return successModel(null, '登录成功');
      } else {
        return errorModel(null, '登录失败');
      }
      // var data = await getUserList()


    }
  }

}

const getCookieExpires = function () {
  var d = new Date()
  d.setTime(d.getTime() + 1000 * 20)
  return d.toGMTString();
}


module.exports = handleUserRouter;