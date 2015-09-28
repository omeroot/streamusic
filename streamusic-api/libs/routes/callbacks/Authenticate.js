var verify = require('../../utils/verify.js');
var codes = require('../../../messages/res-content.js');
var conf = require('../../../configure/conf.js');

var authenticate = function (req, res) {
  var token = req.body.token || req.query.token || req.headers['x-authtoken'] || req.cookies.token;

  if (token) {
    verify(token, conf.token.key, function (err, result) {
      if (err) {
        res.status(codes.success.code).json(codes.success);
      } else {
        res.status(codes.unAuthorized.code).json(codes.unAuthorized);
      }
    });
  } else {
    res.status(codes.unAuthorized.code).json(codes.unAuthorized);
  }
};

module.exports = authenticate;