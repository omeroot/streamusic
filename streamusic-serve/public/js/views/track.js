define(['events'],function(events){
  var trackItemView = Backbone.View.extend({
    tagName: "tr",
    events: {
      'click #list-play': 'trigItem'
    },
    modelJSON: null,
    initialize: function(){
      this.modelJSON = this.model.toJSON();
      console.log("MODELJSON",this.modelJSON);
      var t = this.transformTime(this.modelJSON.tracks[0].duration_ms);
      this.modelJSON.human_duration = t;

      this.template = '<td>' + this.modelJSON.name + '</td>' +
                      '<td>' + this.modelJSON.artist + '</td>' +
                      '<td>' + this.modelJSON.human_duration + '</td>' +
                      '<td>' +
                        '<div class="col-xs-3"></div><input class="form-control input-sm" id="send" type="text"></div>' +
                      '</td>' +
                      '<td>' +
                        '<button type="button" class="btn btn-primary btn-xs" id="list-play">play</button>' +
                      '</td>';

      $('#send').focus().keydown(function(e){
        if(e.which == 13){
          document.getElementById('send').innerHTML = "";
        }
      });
    },
    render: function(){
      this.$el.html(this.template);
      return this;
    },
    trigItem: function(){
      console.log('trig');
      events.trigger('track-item',this.modelJSON);
    },
    transformTime: function(ms){
      var sn;
      var mn;

      sn = ms/1000;
      mn = Math.floor(sn/60);
      sn = sn % 60;

      if(mn > 9){
        return "0" + mn.toString() + ":" + sn.toString();

      }else{
        return mn.toString() + ":" + sn.toString();

      }
    }
  });

  return trackItemView;
});