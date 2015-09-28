var User = require('../../../models/user.js').model;

var getUserTracks = function(userID, callback){
  User.findOne({_id: userID},{_id: 0})
      .select('tracks')
      .exec(callback);
};

var getUserProfile = function(userID, callback){
  User.findOne({username: userID},{_id: 0})
      .exec(callback);
};

module.exports = {
  getUserTracks: getUserTracks,
  getUserProfile: getUserProfile
};