define(['collections/playlistCol', 'views/track'], function (playlistCollection, trackView) {
  var playListView = Backbone.View.extend({
    initialize: function () {
      playlistCollection.fetch({
        reset: true,
        xhrFields: {
          withCredentials: true
        },
        success: function (data, responseText, jqXHR) {
        },
        error: function (data, responseText, errorThrown) {
          console.log('err', errorThrown);
        }
      });
      this.track = document.getElementById('track');
    },
    render: function () {
      this.createPlayList(playlistCollection.models);
    },
    createPlayList: function (models) {
      console.log(models);
      _.each(models, function (model) {
        this.addTrack(model);
      }, this);
    },
    addTrack: function (model) {
      var v = new trackView({
        model: model
      }).render();
      v.bind('item', this.playTrack, this);
      this.$el.append(v.el);
    },
    playTrack: function (item) {
      console.log(item);
      this.track.play();
    }
  });

  return playListView;
});