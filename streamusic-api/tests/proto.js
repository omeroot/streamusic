var User = require('../models/user.js').model;
var crypter = require('../libs/utils/crypt.js');

var user = new User({
  userName: "node",
  password: crypter.createHash("123",'sha256')
});



user.save(function(err){
  console.log('sdf');
  if(err) console.log(err);
  if(!err){
    console.log('success saved node user');
  }

});



/*

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

 */