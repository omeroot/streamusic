define(['collections/playlistCol', 'views/track'], function (playlistCollection, trackView) {
  var playListView = Backbone.View.extend({
    initialize: function () {
    },
    render: function () {
      playlistCollection.fetch({
        success: _.bind(function (data) {
          console.log(playlistCollection.models);
          this.createPlayList(playlistCollection.models);
        }, this)
      });

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
      $('#track').append('<source src=' + 'http://cdn.demircanomer.com/erayicin' + ' type="audio/mpeg" />');
      var track = document.getElementById('track');
      track.play();
    }
  });

  return playListView;
});