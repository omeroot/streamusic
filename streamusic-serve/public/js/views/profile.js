define(['text!templates/profile.html', 'views/player', 'views/playlist'], function (profileTemplate, playerView, playListView) {
  var profileView = Backbone.View.extend({
    el: $('#content'),
    events: function () {

    },
    render: function () {
      this.$el.html(profileTemplate);

      var pv = new playerView({el: $('.player')});
      var pl = new playListView({el: $('.table')});

      pv.render();
      pl.render();
    }
  });

  return profileView;
});