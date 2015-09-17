define(['text!templates/profile.html'],function(profileTemplate){
  var profileView = Backbone.View.extend({
    el: $('#content'),
    events: function(){

    },
    render: function(){
      this.$el.html(profileTemplate);
    },
    play: function(){

    },
    pause: function(){

    },

  });

  return profileView;
});