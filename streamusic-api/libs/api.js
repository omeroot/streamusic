var rest = require('./routes/rest.js');
var codes = require('../messages/res-content.js');
var controlDBCallback = require('./modules/controlDBCallback.js');

var getUserTracks = function (req, res) {
  var userID = req.body.user_id || req.params.user_id || req.query.user_id;

  if (userID) {
    rest.user.getUserTracks(userID, controlDBCallback(res));
  } else {
    res.status(codes.badRequest.code).json(codes.badRequest);
  }
};

var getMeTracks = function (req, res) {
  var userID = req.decoded._id;

  if (userID) {
    rest.user.getUserTracks(userID, controlDBCallback(res));
  } else {
    res.status(codes.badRequest.code).json(codes.badRequest);
  }
};

var getMeProfile = function (req, res) {
  var userID = req.decoded._id;

  if (userID) {
    rest.user.getUserProfile(userID, controlDBCallback(res));
  } else {
    res.status(codes.badRequest.code).json(codes.badRequest);
  }
};

var authenticate = function (req, res) {
  return rest.authenticate(req, res);
};


module.exports = {
  authenticate: authenticate,
  getUserTracks: getUserTracks,
  getMeTracks: getMeTracks,
  getMeProfile: getMeProfile
};