define(['views/login','views/profile','views/header','views/register'],
  function(loginView,profileView,headerView,registerView){
  var router = Backbone.Router.extend({
    routes: {
      'login': 'login',
      'profile': 'profile',
      'register': 'register'
    },
    currentView: null,
    changeView: function(view){
      if(this.currentView != null){
        this.currentView.undelegateEvents();
        this.currentView.$el.empty();
      }
      this.currentView = view;
      this.currentView.render();
    },
    renderHeader: function(){
      new headerView().render();
    },
    login: function(){
      this.changeView(new loginView());
    },
    profile: function(){
      this.changeView(new profileView());
    },
    register: function(){
      this.changeView(new registerView());
    }
  });

  return router;
});