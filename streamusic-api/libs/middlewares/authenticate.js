var jwt = require('jsonwebtoken');
var codes = require('../../messages/errors.js');
var conf = require('../../configure/conf.js');

module.exports = function(req, res, next){
  var token = req.body.token || req.query.token || req.header['X-AuthToken'] || req.cookies.token;
  if(token){
    jwt.verify(token,conf.token.secret,function(err,decoded){
      if(err){
        res.json(codes.unAuthorized);
      }else{
        req.decoded = decoded;
        next();
      }
    });
  }else{
    res.json(codes.unAuthorized);
  }
};