(function () {
  var gui = require('nw.gui');
  var win = gui.Window.get();

  var WindowControl = function () {
    this.listen();
  };

  WindowControl.prototype.listen = function () {
    $('.window-control-close').on('click', this.bindClose);
    $('.window-control-minimize').on('click', this.bindMinimize);
    $('.window-control-fullscreen').on('click', this.bindFullScreen);

    this.bindExternalLinks();
  };

  WindowControl.prototype.bindClose = function (e) {
    e.preventDefault();

    if (window.confirm("Do you really want to leave?")) {
      win.close();
    }
  };

  WindowControl.prototype.bindExternalLinks = function () {
    $('body').on('click', 'a[href*="http"]', function (e) {
      e.preventDefault();

      gui.Shell.openExternal(e.target);
    });
  };

  WindowControl.prototype.bindMinimize = function (e) {
    e.preventDefault();

    win.minimize();
  };

  WindowControl.prototype.bindFullScreen = function (e) {
    e.preventDefault();

    win.toggleFullscreen();
  };

  window.WindowControl = WindowControl;
})();

$(function () {
  window.winControl = new WindowControl();
});
