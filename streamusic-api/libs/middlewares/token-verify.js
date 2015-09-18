var codes = require('../../messages/res-content.js');
var conf = require('../../configure/conf.js');
var verify = require('../utils/verify.js');

module.exports = function (req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-authtoken'] || req.cookies.token;

  if (token) {
    verify(token, conf.token.secret, function (err, decoded) {
      if (decoded == false) {
        res.json(codes.unAuthorized);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }else{
    res.status(codes.unAuthorized.code).json(codes.unAuthorized);
  }
};