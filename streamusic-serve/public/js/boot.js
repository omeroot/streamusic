require.config({
  paths: {
    jQuery: 'libs/jquery-2.1.4.min',
    jQueryCookie: 'libs/jquery.cookie',
    Backbone: 'libs/backbone-min',
    text: 'libs/text',
    templates: '../templates',
    Underscore: 'libs/underscore-min',
    Router: 'router',
    Main: 'main',
    cache: 'cache'
  },
  shim: {
    'jQuery': {
      exports: '$'
    },
    'jQueryCookie': ['jQuery'],
    'Backbone': ['Underscore', 'jQuery'],
    'Main': ['Backbone']
  }
});

require(['Main'],function(main){
  main.start();
});