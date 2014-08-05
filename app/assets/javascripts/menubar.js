var gui = require('nw.gui');
var fs = require('fs');
var menu = new gui.Menu({ type: 'menubar' });

// Create a tray icon
var tray = new gui.Tray({ title: 'Cow', icon: 'assets/images/icon.png' });

menu.append(new gui.MenuItem({
  label: 'File',
  submenu: new gui.Menu()
}));

menu.items[0].submenu.append(new gui.MenuItem({
  label: 'New',
  click: function () {
    gui.Window.open('index.html');
  }
}));

menu.items[0].submenu.append(new gui.MenuItem({
  type: 'separator'
}));

menu.items[0].submenu.append(new gui.MenuItem({
  label: 'save',
  click: function () {
    chooseFile('#gui-save');
  }
}));

function chooseFile(name) {
  var chooser = $(name);
  chooser.change(function(e) {
    var filename = $(this).val()
    var code     = CowdowApp.getCode()

    fs.writeFile(filename, code);
    document.title = filename + ' saved!';

    e.preventDefault();
  });

  chooser.trigger('click');
}


menu.items[0].submenu.append(new gui.MenuItem({
  label: 'Quit',
  click: function () {
    gui.Window.get().close();
  }
}));

gui.Window.get().menu = menu;
