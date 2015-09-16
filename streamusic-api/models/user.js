var mongoose = require('mongoose');
var track = require('./track');

var Schema = mongoose.Schema;

var userSchema = new Schema({
      firstName: String,
      lastName: String,
      userName: String,
      gender: String,
      contact: {
        email: String
      },
      password: String,
      photo: {
        prefix: {
          type: String,
          default: "http://localhost/img/user"
        },
        suffix: String
      },
      created: {
        type: Date,
        default: Date.now
      },
      tracks: [track.schema],
      notifications: []
    },
    {collection: 'users'});

module.exports = {
  model: mongoose.model('User', userSchema),
  schema: userSchema
};