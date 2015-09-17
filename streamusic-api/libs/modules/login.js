var conf = require('../../messages/res-content.js');
var generateToken = require('../utils/generate-token.js');
var User = require('../../models/user.js').model;
var Track = require('../../models/track.js');


module.exports = function (req, res) {
  var username = req.body.username || req.query.username;
  var password = req.body.password || req.query.password;

  if (typeof username === 'undefined' || typeof password === 'undefined') {
    res.status(conf.badRequest.code).json(conf.badRequest);
  } else {
    User.findOne({userName: username},function(err, user){
      if(err){
        res.status(conf.badRequest.code).json(conf.badRequest);
      }else if(user){
        if(user.password != password){
          res.status(conf.badRequest.code).json(conf.badRequest);
        }else{
          token = generateToken(user);
          res.set('X-AuthToken',token);
          res.status(conf.success.code).json(conf.success);
        }
      }else{
        res.status(conf.badRequest.code).json(conf.badRequest);
      }
    });
  }

};