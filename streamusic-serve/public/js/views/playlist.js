define(['collections/playlistCol', 'views/track'], function (playlistCollection, trackView) {
  var playListView = Backbone.View.extend({
    render: function () {
      playlistCollection.fetch({
        success: _.bind(function () {
          this.createPlayList(playlistCollection.models);
        }, this),
        error: function(a,b,thrownError){
          console.log(thrownError);
        }
      });

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