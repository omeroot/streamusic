var mongoose = require('mongoose');
var User = require('../../../models/user.js').model;
var Track = require('../../../models/track.js').model;

var getTracks = function (userID, callback) {
  User.findOne({_id: userID}, {_id: 0})
      .select('tracks')
      .exec(callback);
};

var getTrack = function (trackID, callback) {
  Track.findOne({_id: trackID}, {_id: 0})
      .exec(callback);
};

module.exports = {
  getTracks: getTracks,
  getTrack: getTrack
};