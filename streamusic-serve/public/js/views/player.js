define(['text!templates/player.html','events'],function(playerTemplate,events){
  var playlistView = Backbone.View.extend({
    events: {
      'click #play' : 'playPause'
    },
    playStatus: false,
    track:null,
    initialize: function(){
      events.on('track-item', this.prepareTrack, this);
      this.progress = $('.progress-bar');
    },
    render: function(){
      this.$el.html(playerTemplate);
      this.track = document.getElementById('track');
      //this.prepareTrack(this.default_music);
      //events.trigger('track-item',this.default_music);
    },
    playPause: function(){
      if(this.playStatus){
        this.playStatus = false;
        this.pause();
      }else{
        this.playStatus = true;
        this.play();
      }
    },
    prepareTrack: function (item) {
      $('#track').append('<source src=http://' + item.uri + ' type="audio/mpeg" />');
      $('#time').text(item.human_duration);
      //var track = document.getElementById('track');
      this.track.play();
    },
    play: function(){
      console.log('play');
      //var track = document.getElementById('track');
      this.track.play();
    },
    pause: function(){
      this.track.pause();
    }
  });

  return playlistView;
});