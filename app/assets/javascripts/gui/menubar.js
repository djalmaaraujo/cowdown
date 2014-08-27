var gui           = require('nw.gui');
var fs            = require('fs');
var win           = gui.Window.get();
var nativeMenuBar = new gui.Menu({ type: "menubar" });

nativeMenuBar.createMacBuiltin("CownDown", {
  hideEdit: true,
  hideWindow: true
});

win.menu = nativeMenuBar;

var fileMenu = new gui.MenuItem({
  label: 'File',
  submenu: new gui.Menu()
});

win.menu.insert(fileMenu, 1);

win.menu.items[1].submenu.append(new gui.MenuItem({
  label: 'New File',
  click: function () {
    gui.Window.open('index.html', {
      toolbar: false,
      frame: false
    });
  }
}));

win.menu.items[1].submenu.append(new gui.MenuItem({
  type: 'separator'
}));

win.menu.items[1].submenu.append(new gui.MenuItem({
  label: 'Save',
  click: function () {
    FileUtils.saveNewOrUpdate();
  }
}));

win.menu.items[1].submenu.append(new gui.MenuItem({
  label: 'Quit',
  click: function () {
    gui.Window.get().close();
  }
}));
