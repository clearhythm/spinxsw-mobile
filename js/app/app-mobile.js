define(['jquery', '/js/app/remote-mobile', '/js/app/utils-mobile', '/js/app/play'],
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