define(['../models/trackModel','Backbone'],function(trackModel,Backbone){
  var playlistCollection = Backbone.Collection.extend({
    url: 'http://188.166.43.77:5051/api/v1/user/me/tracks',
    model: trackModel
  });
  
  return playlistCollection;
});