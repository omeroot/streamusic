var jwt = require('jsonwebtoken');
var conf = require('../../configure/conf.js');

module.exports = function(user){
  return jwt.sign(user,conf.token.secret,{
  	algorithm: 'sha256',
  	expiresInMinutes: 2
  });
};