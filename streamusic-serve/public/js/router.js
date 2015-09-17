define(['views/login','views/profile','views/header'],function(loginView,profileView,headerView){
  var router = Backbone.Router.extend({
    routes: {
      'login': 'login',
      'profile': 'profile'
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
    }
  });

  return router;
});