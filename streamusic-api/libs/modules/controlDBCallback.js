var codes = require('../../messages/res-content.js');

module.exports = function(res){
  return function (err, data) {
    var result = {};

    if(err){
      result = {
        code: codes.forbidden,
        result: {}
      };
    }else{
      if(result){
        result = {
          code: codes.success,
          result: data
        };
      }else{
        result = {
          code: codes.badRequest,
          result: {}
        };
      }
    }

    res.status(result.code).json(result.result);
  };


};
