require.config({
  paths: {
    jQuery: 'libs/jquery-2.1.4.min',
    jQueryCookie: 'libs/jquery.cookie',
    Backbone: 'libs/backbone-min',
    text: 'libs/text',
    bootstrap: 'libs/bootstrap.min',
    templates: '../templates',
    Underscore: 'libs/underscore-min',
    Router: 'router',
    utils: 'modules/_utils',
    cache: 'cache',
    models: 'models/',
    collections: 'collections/',
    events: 'events'
  },
  shim: {
    'jQuery': {
      exports: '$'
    },
    'jQueryCookie': ['jQuery'],
    'Backbone': ['Underscore', 'jQuery'],
    'Main': ['Backbone','utils','jQueryCookie'],
    'bootstrap': ['jQuery']
  }
});

require(['Main','utils'],function(main,utils){
  utils.overrideSync();
  main.start();
});