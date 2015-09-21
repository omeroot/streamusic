define(['../models/trackModel'],function(trackModel){
  var playlistCollection = Backbone.Collection.extend({
    url: 'http://188.166.43.77:5051/api/v1/user/me/tracks',
    model: trackModel
  });

  return new playlistCollection();
});