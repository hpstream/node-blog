class BaseModel{
  constructor(data,msg){
    this.data = data;
    this.msg = msg
  }
}

class SuccessModel extends BaseModel{
  constructor(data, msg){
      super(data, msg)
      this.code = 0;
  }
}

class ErrorModel extends BaseModel {
  constructor(data, msg) {
    super(data, msg)
    this.code = -1;
  }
}




module.exports = {
  successModel(data, msg){
    return new SuccessModel(data, msg)
  },
  errorModel(data, msg){
    return new ErrorModel(data, msg)
  }
}