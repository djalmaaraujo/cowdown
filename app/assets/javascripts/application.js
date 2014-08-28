(function () {
  var Application = function () {
    this.setup();
  };

  Application.prototype.setup = function () {
    window.CowdowApp = new Cowdow(Showdown.converter);

    $('textarea')
      .on('keydown', tabOverride.handlers.keydown)
      .on('keypress', tabOverride.handlers.keypress);

    CowdowApp.updatePreview();
    CowdowApp.code.focus();
  };

  window.Application = Application;
})();

$(function () {
  new Application();
});
