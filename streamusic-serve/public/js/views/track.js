define(function(){
  var trackItemView = Backbone.View.extend({
    tagName: "tr",
    events: {
      'click #play': 'trigItem'
    },
    modelJSON: null,
    initialize: function(){
      this.modelJSON = this.model.toJSON();
      this.template = '<td>' + this.modelJSON.name + '</td>' +
                      '<td>' + this.modelJSON.artist + '</td>' +
                      '<td>' + this.modelJSON.duration + '</td>' +
                      '<td>' +
                        '<button type="button" class="btn btn-primary btn-xs" id="send-friend">send</button>' +
                      '</td>' +
                      '<td>' +
                        '<button type="button" class="btn btn-primary btn-xs" id="play">play</button>' +
                      '</td>';
    },
    render: function(){
      this.$el.html(this.template);
      return this;
    },
    trigItem: function(){
      this.trigger('item',this.modelJSON);
    }
  });
  return trackItemView;
});