require.config({
  paths: {
    jQuery: 'libs/jquery-2.1.4.min',
    jQueryCookie: 'libs/jquery.cookie',
    Backbone: 'libs/backbone-min',
    text: 'libs/text',
    bootstrap: 'libs/bootstrap.min.js',
    templates: '../templates',
    Underscore: 'libs/underscore-min',
    Router: 'router',
    cache: 'cache',
    models: 'models/',
    collections: 'collections/',
  },
  shim: {
    'jQuery': {
      exports: '$'
    },
    'jQueryCookie': ['jQuery'],
    'Backbone': ['Underscore', 'jQuery'],
    'Main': ['Backbone'],
    'bootstrap': ['jQuery']
  }
});

require(['Main'],function(main){
  main.start();
});