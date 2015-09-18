var rest = require('./routes/rest.js');
var codes = require('../messages/res-content.js');
var verify = require('./utils/verify.js');
var conf = require('../configure/conf.js');


var authenticate = function (req, res) {
  var token = req.body.token || req.query.token || req.headers['x-authtoken'] || req.cookies.token;

  if (token) {
    verify(token, conf.token.key, function (err, result) {
      if (err) {
        res.status(codes.success.code).json(codes.success);
      } else {
        res.status(codes.unAuthorized.code).json(codes.unAuthorized);
      }
    });
  } else {
    res.status(codes.unAuthorized.code).json(codes.unAuthorized);
  }
};

var getTracks = function (req, res) {
  var userID = req.body.user_id || req.params.user_id || req.query.user_id;

  if (userID) {
    rest.track.getTracks(userID, function (err, result) {
      if (err) {
        res.status(codes.notFound.code).json(codes.notFound);
      } else {
        res.status(codes.success.code).json(result.tracks);
      }
    });
  }
};

var getMeTracks = function (req, res) {
  var userID = req.decoded._id;

  if (userID) {
    rest.track.getTracks(userID, function (err, result) {
      if (err) {
        res.status(codes.notFound.code).json(codes.notFound);
      } else {
        res.status(codes.success.code).json(result.tracks);
      }
    });
  } else {
    res.status(codes.badRequest.code).json(codes.badRequest);
  }
};

var getSelfTrack = function (req, res) {
  var trackID = req.params.track_id;

  if(trackID){
    rest.track.getTrack(trackID,function(err, result){
      if(err){
        res.status(codes.unAvailable.code).json(codes.unAvailable);
        throw err;
      }
      if(!result){
        res.status(codes.notFound.code).json(codes.notFound);
      }else if(result){
        res.status(codes.success.code).json(result);
      }
    })
  }else{
    res.status(codes.badRequest.code).json(codes.badRequest);
  }
};

module.exports = {
  authenticate: authenticate,
  getTracks: getTracks,
  getMeTracks: getMeTracks,
  getSelfTrack: getSelfTrack
};