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
    events: 'events',
    Main: 'main'
  },
  shim: {
    'jQuery': {
      exports: '$'
    },
    'jQueryCookie': ['jQuery'],
    'Backbone': {
      deps: ['Underscore', 'jQuery']
    },
    'Main': {
      deps: ['utils', 'jQueryCookie']
    },
    'bootstrap': ['jQuery']
  }
});

require(['utils'], function (utils) {
  utils.overrideSync();

  require(['Main'],function(main){
    main.start();
  });
});