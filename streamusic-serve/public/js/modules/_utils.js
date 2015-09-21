define(function(){

  var overrideSync = function(){

    console.log($.cookie('token'));

    $.ajaxSetup({
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-AuthToken', $.cookie('token'))
      }
    });

    var sync = Backbone.sync;

    Backbone.sync = function(method,model,options){
      options = options || {};
      options.beforeSend = function(jqXHR){
        jqXHR.setRequestHeader("X-AuthToken", $.cookie('token'));
      };
      options.xhrFields={
        withCredentials: true
      };
      options.error = function(data,responseText,errorThrown){
        console.log('err',errorThrown);
      };

      return sync.call(Backbone,method,model,options);
    }

  };

  return {
    overrideSync: overrideSync
  };
});