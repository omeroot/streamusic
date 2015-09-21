var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var login = require('./modules/login.js');
var register = require('./modules/register.js');
var mongoose = require('mongoose');
var conf = require('./configure/conf.js');

var app = express();
var server = http.createServer(app);

mongoose.connect(conf.database.host,conf.database.opts);

app.use(cookieParser());
app.use(bodyParser());

///
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
////


/////
app.post('/login',login);
app.post('/register',register);
app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});
/////

server.listen(conf.port);
