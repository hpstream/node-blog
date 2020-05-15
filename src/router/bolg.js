var { getList, updateBlog, blogdetail, createdetail, deleteblog}=require('./../controller/blog')
var { successModel } = require('./../model/resModel')
const handleBolgRouter = async (req, res) => {
  const path = req.path;
  const method = req.method;
  // 获取博客列表
  if (method === "GET") {
    if (path === '/api/blog/list') {
      var data = await getList();
      return successModel(data,null)
    }
  }

  if (method === "POST"){

    if (path === '/api/blog/update') {
      var data = await updateBlog(req.body);
      return successModel(data, null)
     
    }
    if (path === '/api/blog/detail') {
      var data = await blogdetail(req.body);
      return successModel(data, null)
    }

    if (path === '/api/blog/new') {
      var data = await createdetail(req.body);
      return successModel(data, null)
    }

    if (path === '/api/blog/delete') {
      var data = await deleteblog(req.body);
      return successModel(data, null)
    }
  }

}

module.exports = handleBolgRouter;