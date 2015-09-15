var exp = require('./libs/init.js');
var api = require('./libs/api.js');

exp.authRouter.get('/authenticate',api.authenticate);
exp.authRouter.get('/refreshtoken',api.refresh_token);