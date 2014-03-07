define(['jquery', 'app/remote-mobile', 'app/utils-mobile'],
function ($, remote, utils) {
  var app = {
    init: function(){
      // Mobile Mobiles & Desktop get different UIs and data logic
      if (utils.isMobile){
        app.initSwitcher('mobile');
        app.showMobileUI();
      } else {
        // :: Desktop Logic (& mock desktop light rig)
        app.initSwitcher('desktop')
        app.showDesktopUI();
      }
    },

    initSwitcher: function (currentView) {
      app.setSwitcherLabel(currentView);
      $('.switcher button').click(function(e){
        var $span = $('#switcher_view');
        var newView = $span.html();
        if (newView == 'Mobile') {
          app.showMobileUI();
          $span.html('Desktop');
        } else {
          app.showDesktopUI();
          $span.html('Mobile');
        }
      });
    },

    setSwitcherLabel: function (currentView) {
      var newView = (currentView == 'desktop') ? 'Mobile' : 'Desktop';
      $('#switcher_view').html(newView);
    },

    showMobileUI: function(){
      $('#desktop_ui').hide();
      $('#mobile_ui').show();

      require(['app/mobileUI'], function (mobileUI) {
        mobileUI.init();
      });
    },

    showDesktopUI: function(){
      $('#mobile_ui').hide();
      $('#desktop_ui').show();

    }
  };

  return app;
});