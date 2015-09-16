var conf = require('../../messages/res-content.js');
var generateToken = require('../utils/generate-token.js');
var User = require('../../models/user.js');
var Track = require('../../models/track.js');

/*
var user = new User({
  userName: "node",
  password: "123"
});


user.save(function(err){
  if(!err){
    console.log('success saved node user');
  }
});

*/

Track.model.findOne({duration: 168000},function(err,r){
  User.model.findOne({userName: "node"},function(er,u){
    if(err) console.log(err);
    u.tracks.push(r);
    u.save(function(err){
      if(err) console.log(err);
      if(!err){
        console.log('success');
      }
    });
  })
});







module.exports = function (req, res) {
  var username = req.body.username || req.query.username;
  var password = req.body.password || req.query.password;

  if (typeof username === 'undefined' || typeof password === 'undefined') {
    res.status(conf.badRequest.code).json(conf.badRequest);
  } else {
    User.findOne({username: username},function(err, user){
      if(err){
        res.status(conf.badRequest.code).json(conf.badRequest);
      }else if(user){
        if(user.password != password){
          res.status(conf.badRequest.code).json(conf.badRequest);
        }else{
          console.log(user);
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