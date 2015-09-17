var jwt = require('jsonwebtoken');

function verify(token,key,callback){
  jwt.verify(token,key,function(err,decoded){
    if(err){
      callback(true,{});
    }else{
      callback(null,decoded);
    }
  })
}

module.exports = verify;