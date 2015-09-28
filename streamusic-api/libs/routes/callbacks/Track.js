var Track = require('../../../models/track.js').model;

var getTrack = function (trackID, callback) {
  Track.findOne({_id: trackID}, {_id: 0})
      .exec(callback);
};

module.exports = {
  getTrack: getTrack
};