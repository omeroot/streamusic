var nodemailer = require('nodemailer');
var conf = require('../../configure/conf.js');

module.exports = function (to, verificationURL) {
  var transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: conf.mail
  });

  var mailOpts = {};

  transport.sendMail(mailOpts, function (err, info) {
    if (err) throw err;
    console.log('message sent ', info.response);
  })
};