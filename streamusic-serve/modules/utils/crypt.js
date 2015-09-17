var crypto = require('crypto');

var crypt = function(password,alg){
  var shaSum = crypto.createHash(alg);

  shaSum.update(password);
  password = shaSum.digest('hex');

  return password;
};

var encypt = function(password,alg){
  //
};

var createSalt = function(){
  var salt = crypto.randomBytes(128).toString('base64');

  return salt;
};

module.exports = {
  crypt: crypt,
  encrypt: encypt
};