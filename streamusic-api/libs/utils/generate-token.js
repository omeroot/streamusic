var jwt = require('jsonwebtoken');
var conf = require('../../configure/conf.js');

generateToken = function(user){
  return jwt.sign(user,conf.token.key);
};