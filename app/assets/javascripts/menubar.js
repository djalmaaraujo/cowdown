var gui  = require('nw.gui');
var fs   = require('fs');
var menu = new gui.Menu({ type: 'menubar' });

menu.append(new gui.MenuItem({
  label: 'File',
  submenu: new gui.Menu()
}));

menu.items[0].submenu.append(new gui.MenuItem({
  label: 'New File',
  click: function () {
    gui.Window.open('index.html');
  }
}));

menu.items[0].submenu.append(new gui.MenuItem({
  type: 'separator'
}));

menu.items[0].submenu.append(new gui.MenuItem({
  label: 'Save',
  click: function () {
    FileUtils.chooseFile('#gui-save');
  }
}));

menu.items[0].submenu.append(new gui.MenuItem({
  label: 'Quit',
  click: function () {
    gui.Window.get().close();
  }
}));

gui.Window.get().menu = menu;
