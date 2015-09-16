var exp = require('./libs/init.js');
var api = require('./libs/api.js');

exp.apiRouter.get('/authenticate',api.authenticate);