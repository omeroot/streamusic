var codes = require('../../messages/res-content.js');
module.exports = function(req, res){
  res.status(codes.notFound.code).json(codes.notFound);
};