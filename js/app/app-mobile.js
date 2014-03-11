define(['jquery', '/js/app/remote-mobile.js', '/js/app/utils-mobile.js', '/js/app/play.js'],
function ($, remote, utils, play) {
  var app = {
    init: function(){
      // Mobiles & Desktop get different UIs and data logic
      if (!utils.isMobile){
        // :: Redirect to our desktop site
        // utils.redirectToURL('http://about.me/spinxsw');
      } else {
        // play is loaded via declaration
      }
    },
  };

  return app;
});