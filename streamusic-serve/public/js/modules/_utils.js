define(function(){

  var overrideSync = function(){

    $.ajaxSetup({
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(xhr){
        console.log('token added to header');
        xhr.setRequestHeader('X-AuthToken', $.cookie('token'))
      }
    });

    var sync = Backbone.sync;

    Backbone.sync = function(method,model,options){
      options = options || {};
      options.beforeSend = function(jqXHR){
        jqXHR.setRequestHeader("X-AuthToken", $.cookie('token'));
      };

      return sync.call(Backbone,method,model,options);
    }

  };

  return {
    overrideSync: overrideSync
  };
});