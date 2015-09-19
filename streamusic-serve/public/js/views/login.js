define(['text!templates/login.html'],function(loginTemplate){
  var loginView = Backbone.View.extend({
    el: $('#content'),
    events: {
      'click .btn': 'loginClick'
    },
    render: function(){
      this.$el.html(loginTemplate);
    },
    newAttributes: function(){
      var username = $('#login-name').val();
      var pass = $('#login-pass').val();

      if(this.validate(username, pass)){
        return {
          username: username,
          password: pass
        };
      }else{
        console.log('incorrect');
        return false;
      }
    },
    loginClick: function(){
      var res = this.newAttributes();
      if(res != false){
        this.toServer(res)
      }
    },
    validate: function(username, password){
        //
      return true;
    },
    toServer: function(data){
      $.ajax({
        method: 'POST',
        url: '/login',
        data: data,
        success: function(data, responseText, jqXHR){
          document.cookie = "token=" + jqXHR.getResponseHeader('X-AuthToken');
          window.location.hash = 'profile';
        },
        error: function(a,b,thrownError){
          console.log('server error',thrownError);
        }
      });
    }
  });

  return loginView;
});