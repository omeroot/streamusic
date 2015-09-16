var jwt = require('jsonwebtoken');

function verify(token,key){
  jwt.verify(token,key,function(err,decoded){
    if(err){
      return false
    }else{
      return decoded;
    }
  })
}

module.exports = verify;