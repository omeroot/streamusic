var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var tverify = require('./middlewares/token-verify.js');
var login = require('./modules/login.js');
var staticServe = require('./modules/static-serve.js');
var register = require('./modules/register.js');
var mongoose = require('mongoose');
var conf = require('../configure/conf.js');
var port = require('../configure/conf').port;

var app = express();
var server = http.createServer(app);

var apiRouter = express.Router();
var authRouter = express.Router();

mongoose.connect(conf.database.host);

app.use(cookieParser());
app.use(bodyParser());

///
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
////

apiRouter.use(tverify);

app.use('/api/v1', apiRouter);
app.use('/auth', authRouter);

/////
app.post('/login',login);
app.post('/register',register);
app.get('*',staticServe.index);
/////

server.listen(port);

module.exports = {
  apiRouter: apiRouter,
  authRouter: authRouter
};