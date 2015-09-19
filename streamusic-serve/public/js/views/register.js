define(['text!templates/register.html'],function(registerTemplate){
  var registerView = Backbone.View.extend({
    el: $('#content'),
    events: {
      'click #register': 'register'
    },
    render: function(){
      this.$el.html(registerTemplate);
    },
    newAttributes: function(){
      return {
        firstName: $('[name="firstname"]').val(),
        lastName: $('[name="lastname"]').val(),
        email: $('[name="email"]').val(),
        username: $('[name="username"]').val(),
        password: $('[name="password"]').val()
      };
    },
    register: function(){
      var data = this.newAttributes();

      $.ajax({
        context: this,
        method: 'POST',
        url: '/register',
        data: data,
        success: function(){
          this.$el.empty();
          this.$el.html("<h2>we send validation url to your email</h2>");
        },
        error: function(data,responseText,errorThrown){
          console.log(responseText);
        }
      }, this);
    }
  });

  return registerView;
});