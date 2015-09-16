var conf = require('../../messages/res-content.js');
var generateToken = require('../utils/generate-token.js');

module.exports = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  if (typeof username === 'undefined' || typeof password === 'undefined') {
    res.status(conf.badRequest.code).json(conf.badRequest);
  } else {

  }

};