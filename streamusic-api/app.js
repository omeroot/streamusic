var exp = require('./libs/init.js');
var api = require('./libs/api.js');
//var test = require('./tests/proto.js');

exp.authRouter.get('/authenticate', api.authenticate);

exp.apiRouter.get('/user/me/tracks', api.getMeTracks);
exp.apiRouter.get('/user/me/profile', api.getMeProfile);

exp.apiRouter.get('/user/:user_id/tracks', api.getUserTracks);
exp.apiRouter.get('/user/:user_id/profile', api.getUserProfile);

exp.apiRouter.get('/track/:track_id', api.getTrack);


exp.apiRouter.post('/test', function (req, res) {
  console.log(req.headers);
  res.end();
});