$(function () {
  window.CowdowApp = new Cowdow(Showdown.converter);

  $('textarea')
    .on('keydown', tabOverride.handlers.keydown)
    .on('keypress', tabOverride.handlers.keypress);

  CowdowApp.updatePreview();
});
