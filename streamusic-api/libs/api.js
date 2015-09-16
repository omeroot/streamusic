var rest = require('./routes/rest.js');
var codes = require('../messages/res-content.js');
var verify = require('./utils/verify.js');
var conf = require('../configure/conf.js');


var authenticate = function (req, res) {
  var token = req.body.token || req.query.token || req.header['X-AuthToken'] || req.cookies.token;
  if (token) {
    if(verify(token, conf.token.key) != false){
      res.status(codes.success.code).json(codes.success);
    }else{
      res.status(codes.unAuthorized.code).json(codes.unAuthorized);
    }
  } else {
    res.status(codes.unAuthorized.code).json(codes.unAuthorized);
  }
};

module.exports = {
  authenticate: authenticate
};