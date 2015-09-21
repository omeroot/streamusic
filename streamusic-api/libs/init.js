var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var tverify = require('./middlewares/token-verify.js');
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
app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1337');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization X-AuthToken');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (req.method === "OPTIONS") {
  	res.end();
  }
  next();
});

apiRouter.use(tverify);

app.use('/api/v1', apiRouter);
app.use('/auth', authRouter);

server.listen(port);

module.exports = {
  apiRouter: apiRouter,
  authRouter: authRouter
};