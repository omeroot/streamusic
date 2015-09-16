var crypto = require('crypto');

var createHash = function(password,alg){
  var shaSum = crypto.createHash(alg);

  shaSum.update(password);
  password = shaSum.digest('hex');

  return password;
};

var createSalt = function(){
  var salt = crypto.randomBytes(128).toString('base64');

  return salt;
};

module.exports = {
  createHash: createHash,
  createSalt: createSalt
};