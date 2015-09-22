define(['collections/playlistCol', 'views/track','Backbone'], function (PlaylistCollection, trackView, Backbone) {

  var playListView = Backbone.View.extend({
    render: function () {
      var playlistCollection = new PlaylistCollection();
      playlistCollection.fetch({
        success: _.bind(function () {
          this.createPlayList(playlistCollection.models);
        }, this),
        error: function(a,b,thrownError){
          console.log(thrownError);
        }
      });
      console.log(playlistCollection);
    },
    createPlayList: function (models) {
      _.each(models, function (model) {
        this.addTrack(model);
      }, this);
    },
    addTrack: function (model) {
      var v = new trackView({
        model: model
      }).render();
      this.$el.append(v.el);
    }
  });

  return playListView;
});