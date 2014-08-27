$(function () {
  var fakeTabEvent = {
    currentTarget: document.getElementById('cowdown-textarea'),
    keyCode: 9 // this is the default
  };

  var fakeGuiEvent = {
    preventDefault: function () {}
  };

  Mousetrap.bind('mod+s', function(e) {
    FileUtils.saveNewOrUpdate();
    e.preventDefault();
  });

  Mousetrap.bind('mod+]', function(e) {
    fakeTabEvent.shiftKey = false;
    tabOverride.handlers.keydown(fakeTabEvent);
  });

  Mousetrap.bind('mod+[', function(e) {
    fakeTabEvent.shiftKey = true;
    tabOverride.handlers.keydown(fakeTabEvent);
  });

  Mousetrap.bind('mod+p', function(e) {
    window.print();
  });

  Mousetrap.bind('mod+w', function(e) {
    winControl.bindClose(fakeGuiEvent);
  });
});
