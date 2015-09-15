var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = require('../configure/conf').port;
var app = express();

var server = http.createServer(app);

var apiRouter = express.Router();
var authRouter = express.Router();

app.use(cookieParser());
app.use(bodyParser());

apiRouter.use(api.authenticate);

app.use('/api/v1', apiRouter);
app.use('/auth',authRouter);

server.listen(port);

module.exports = {
  apiRouter: apiRouter,
  authRouter: authRouter
};