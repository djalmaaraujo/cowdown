var gui     = require('nw.gui');
var fs      = require('fs');
var win     = gui.Window.get();
win.menu    = new gui.Menu({ type: 'menubar' });

win.menu.insert(new gui.MenuItem({
  label: 'File',
  submenu: new gui.Menu()
}), 1);

win.menu.items[0].submenu.append(new gui.MenuItem({
  label: 'New File',
  click: function () {
    gui.Window.open('index.html', {
      toolbar: false
    });
  }
}));

win.menu.items[0].submenu.append(new gui.MenuItem({
  type: 'separator'
}));

win.menu.items[0].submenu.append(new gui.MenuItem({
  label: 'Save',
  click: function () {
    FileUtils.saveNewOrUpdate();
  }
}));

win.menu.items[0].submenu.append(new gui.MenuItem({
  label: 'Quit',
  click: function () {
    gui.Window.get().close();
  }
}));
