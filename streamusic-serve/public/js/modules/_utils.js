define(['Backbone'],function(Backbone){
  var overrideSync = function(){

    $.ajaxSetup({
      dataType: 'json',
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-AuthToken', $.cookie('token'))
      },
      crossDomain: true
    });

    var sync = Backbone.sync;
  
    Backbone.sync = function(method,model,options){
      options = options || {};
      options.dataType = 'json';
      options.xhrFields = {
        withCredentials: true
      };
      options.beforeSend = function(jqXHR){
        jqXHR.setRequestHeader("X-AuthToken", $.cookie('token'));
      };
      options.crossDomain = true;
  
      return sync.call(Backbone,method,model,options);
    }

  };

  return {
    overrideSync: overrideSync
  };
});