$(function () {
  Mousetrap.bind('mod+s', function(e) {
    FileUtils.saveNewOrUpdate();
    e.preventDefault();
  });
});
