$(function () {
  Mousetrap.bind('mod+s', function(e) {
    FileUtils.chooseFile('#gui-save');
    e.preventDefault();
  });
});
