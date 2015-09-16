var mongoose = require('mongoose');
var userModel = require('../../models/user.js');
var codes = require('../../messages/res-content.js');
var mailer = require('../utils/mailer.js');

module.exports = function (req, res) {
  var User = mongoose.model('users', userModel);
  var data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.userName,
    gender: req.body.gender,
    password: req.body.password,
    email: req.body.email
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