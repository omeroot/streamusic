define(['../models/trackModel'],function(trackModel){
  var playlistCollection = Backbone.Collection.extend({
    url: 'http://localhost:1338/api/v1/user/me/tracks',
    model: trackModel
  });

  return new playlistCollection();
});