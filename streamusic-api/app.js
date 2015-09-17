var exp = require('./libs/init.js');
var api = require('./libs/api.js');
//var test = require('./tests/proto.js');

exp.authRouter.get('/authenticate',api.authenticate);

exp.apiRouter.get('/user/:user_id/playlist');
exp.apiRouter.get('/user/me/tracks',api.getMeTracks);
exp.apiRouter.get('/user/:user_id/tracks',api.getTracks);

exp.apiRouter.get('/user/:user_id/playlist/:playlist_id/tracks');
exp.apiRouter.get('/user/me/playlist');

exp.apiRouter.get('/track/:track_id',api.getSelfTrack);