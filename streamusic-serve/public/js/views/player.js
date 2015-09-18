define(['text!templates/player.html','views/track'],function(playerTemplate,trackView){
  var playlistView = Backbone.View.extend({
    render: function(){
      this.$el.html(playerTemplate);
      return this;
    }
  });

  return playlistView;
});