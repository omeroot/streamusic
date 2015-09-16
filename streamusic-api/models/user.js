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
  date: {
    type: Date,
    default: Date.now
  },
  lists: {
    musics: [],
    notifications: []
  }
});

module.exports = userSchema;