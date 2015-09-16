var codes = require('../../messages/res-content.js');
var conf = require('../../configure/conf.js');
var verify = require('../utils/verify.js');

module.exports = function(req, res, next){
  var token = req.body.token || req.query.token || req.header['X-AuthToken'] || req.cookies.token;
  if(token){
    var decoded = verify(token,conf.token.secret);
    if(decoded == false){
      res.json(codes.unAuthorized);
    }else{
      next();
    }
  }else{
    res.json(codes.unAuthorized);
  }
};