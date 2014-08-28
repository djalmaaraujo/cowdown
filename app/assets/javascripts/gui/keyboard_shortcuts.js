$(function () {
  var fakeTabEvent = {
    currentTarget: document.getElementById('cowdown-textarea'),
    keyCode: 9 // this is the default
  };

  var fakeGuiEvent = {
    preventDefault: function () {}
  };

  Mousetrap.bind('mod+s', function(e) {
    e.preventDefault();

    FileUtils.saveNewOrUpdate();
  });

  Mousetrap.bind('mod+shift+s', function(e) {
    e.preventDefault();

    FileUtils.chooseFile('#gui-save');
  });

  Mousetrap.bind('mod+]', function(e) {
    e.preventDefault();

    fakeTabEvent.shiftKey = false;
    tabOverride.handlers.keydown(fakeTabEvent);
  });

  Mousetrap.bind('mod+[', function(e) {
    e.preventDefault();

    fakeTabEvent.shiftKey = true;
    tabOverride.handlers.keydown(fakeTabEvent);
  });

  Mousetrap.bind('mod+p', function(e) {
    e.preventDefault();

    window.print();
  });

  Mousetrap.bind(['mod+w', 'mod+q'], function(e) {
    e.preventDefault();

    winControl.bindClose(fakeGuiEvent);
  });

  Mousetrap.bind('mod+n', function(e) {
    e.preventDefault();

    GuiUtils.newFile();
  });

  Mousetrap.bind('mod+o', function(e) {
    e.preventDefault();

    FileUtils.OpenNewFile();
  });
});
