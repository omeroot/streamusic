define(['Router','cache'], function (router, cache) {
  var r = new router();

  cache.router = r;

  Backbone.history.start();

  var start = function () {
  	var current = Backbone.history.getFragment();
  	if(current == login){
  		r.navigate('/login', {trigger: true});
  	} else {
  		r.navigate('/' + current, {trigger: true});
  	}
  };

  return {
    start: start
  };
});