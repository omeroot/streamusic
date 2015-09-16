var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var musicSchema = new Schema({
      name: String,
      artist: String,
      duration_ms: Number,
      uri: String,
      popularity: Number,
      cover: {
        prefix: {
          type: String,
          default: "http://localhost:1337/track/cover"
        },
        suffix: String
      }
    },
    {collection: 'tracks'});

module.exports = {
  model: mongoose.model('Track', musicSchema),
  schema: musicSchema
};