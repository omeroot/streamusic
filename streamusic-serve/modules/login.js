var codes = require('../messages/res-content.js');
var conf = require('../configure/conf.js');
var generateToken = require('./utils/generate-token.js');
var crypt = require('./utils/crypt.js');
var User = require('../models/user.js').model;

module.exports = function (req, res) {
  var username = req.body.username || req.query.username;
  var password = req.body.password || req.query.password;

  if (typeof username === 'undefined' || typeof password === 'undefined') {
    res.status(codes.badRequest.code).json(codes.badRequest);
  } else {
    User.findOne({username: username},function(err, user){
      if(err){
        res.status(codes.badRequest.code).json(codes.badRequest);
      }else if(user){
        //
        if(user.password != crypt.crypt(password,conf.secure.hashAlgorithm)){
          res.status(codes.badRequest.code).json(codes.badRequest);
        }else{
          res.set('X-AuthToken',generateToken(user));
          res.status(codes.success.code).json(codes.success);
        }
      }else{
        res.status(codes.badRequest.code).json(codes.badRequest);
      }
    });
  }
};