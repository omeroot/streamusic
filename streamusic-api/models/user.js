var mongoose = require('mongoose');
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
      lists: {
        musics: [],
        notifications: []
      }
    },
    {collection: 'users'});

module.exports = mongoose.model('User',userSchema);