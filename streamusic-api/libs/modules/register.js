var User = require('../../models/user.js');
var codes = require('../../messages/res-content.js');
var mailer = require('../utils/mailer.js');

module.exports = function (req, res) {

  var data = {
    firstName: req.body.firstName || req.query.firstName,
    lastName: req.body.lastName || req.query.lastName,
    username: req.body.userName || req.query.userName,
    gender: req.body.gender || req.query.gender,
    password: req.body.password || req.query.password,
    email: req.body.email || req.query.email
  };

  newUser = new User(data);

  newUser.save(function (err, data) {
    if (err){
      res.status(codes.unavailable.code).json(codes.unavailable);
      throw err;
    }else{

    }
  });

};