define(['Backbone'],function(Backbone){
  var overrideSync = function(){

    $.ajaxSetup({
      dataType: 'json',
      xhrFields: {
        withCredentials: true
      },
      beforeSend: function(xhr){
        console.log('token added to header');
        xhr.setRequestHeader('X-AuthToken', $.cookie('token'))
      },
      crossDomain: true
    });

    var sync = Backbone.sync;
    Backbone.x = 'hi';
    Backbone.sync = function(method,model,options){
      options = options || {};
      options.dataType = 'json';
      options.xhrFields = {
        withCredentials: true
      };
      options.beforeSend = function(jqXHR){
        console.log('before send');
        jqXHR.setRequestHeader("X-AuthToken", $.cookie('token'));
      };
      options.crossDomain = true;
      console.log(options);
      return sync.call(Backbone,method,model,options);
    }

  };

  return {
    overrideSync: overrideSync
  };
});