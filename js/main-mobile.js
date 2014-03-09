require.config({
  paths: {
    jquery: ['//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min', '/js/lib/jquery-2.1.0.min'],
    reconnectingwebsocket: '/js/lib/reconnecting-websocket.e86719bb55',
    lodash: ['//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min', '/js/lib/lodash-2.4.1.min'], // Very similar to underscore
    shake: '/js/lib/shake.9fb2c4d3ab', // todo: could use a shim!
  },

  shim: {
    reconnectingwebsocket: { exports: 'ReconnectingWebSocket' },

    detector: { exports: 'Detector' },
    stats: { exports: 'Stats' },
  },

  waitSeconds: 60
});

// Catch timeout errors & tell the user
requirejs.onError = function (err) {
  if (err.requireType === 'timeout') {
    // To do: better error, better handling.
    alert('Error: Load timeout. Please reload or check your connection.');
  }

  throw err;
};

// Let's kick off the application
require([
  '/js/app/app-mobile'
], function(app){
  app.init();
});