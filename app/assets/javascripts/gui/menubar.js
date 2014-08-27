var gui           = require('nw.gui');
var fs            = require('fs');
var win           = gui.Window.get();
var nativeMenuBar = new gui.Menu({ type: "menubar" });

nativeMenuBar.createMacBuiltin("CowDown");

win.menu = nativeMenuBar;

var fileMenu = new gui.MenuItem({
  label: 'File',
  submenu: new gui.Menu()
});

win.menu.insert(fileMenu, 1);

win.menu.items[1].submenu.append(new gui.MenuItem({
  label: 'New File',
  click: function () {
    GuiUtils.newFile();
  }
}));

win.menu.items[1].submenu.append(new gui.MenuItem({
  type: 'separator'
}));

win.menu.items[1].submenu.append(new gui.MenuItem({
  label: 'Open ...',
  click: function () {
    FileUtils.OpenNewFile();
  }
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

win.menu.items[0].submenu.insert(new gui.MenuItem({
  label: 'CowDown Syntax Help',
  click: function () {
    FileLoader.load('./app/assets/help.md');

    FILEOPTS.saved    = false;
    FILEOPTS.opened   = false;
    FILEOPTS.fileName = null;
    FILEOPTS.filePath = null;
  }
}), 1);
