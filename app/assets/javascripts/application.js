$(function () {
  window.CowdowApp = new Cowdow(Showdown.converter);

  var textarea = document.getElementById('cowdown-textarea');
  tabOverride.set(textarea);
});
