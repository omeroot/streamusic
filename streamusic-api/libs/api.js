var rest = require('./routes/rest.js');
var codes = require('../messages/errors.js');

var authenticate = function (req, res) {
  var token = req.body.token || req.query.token || req.header['X-AuthToken'] || req.cookies.token;
  if (token) {
    rest.authenticate(token, function (err, response) {
        res.status(response.meta.code).json(response);
    });
  } else {
    res.status(codes.unAuthorized.code).json(codes.unAuthorized);
  }
};

var refreshToken = function(req, res){

};

module.exports = {
  authenticate: authenticate,
  refresh_token: refreshToken
};