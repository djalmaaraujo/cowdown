$(function () {
  var FAKE_TAB_EVENT = {
    currentTarget: document.getElementById('cowdown-textarea'),
    keyCode: 9 // this is the default
  };

  Mousetrap.bind('mod+s', function(e) {
    FileUtils.saveNewOrUpdate();
    e.preventDefault();
  });

  Mousetrap.bind('mod+]', function(e) {
    FAKE_TAB_EVENT.shiftKey = false;
    tabOverride.handlers.keydown(FAKE_TAB_EVENT);
  });

  Mousetrap.bind('mod+[', function(e) {
    FAKE_TAB_EVENT.shiftKey = true;
    tabOverride.handlers.keydown(FAKE_TAB_EVENT);
  });

  Mousetrap.bind('mod+p', function(e) {
    window.print();
  });
});
