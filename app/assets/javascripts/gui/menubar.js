(function () {
  var gui           = require('nw.gui');
  var fs            = require('fs');
  var win           = gui.Window.get();
  var nativeMenuBar = new gui.Menu({ type: "menubar" });

  nativeMenuBar.createMacBuiltin("CowDown");
  win.menu = nativeMenuBar;

  var MenuBar = function () {
    this.createFileMenu();
    this.createAppNameMenu();
  };

  MenuBar.prototype.createAppNameMenu = function () {
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
  };

  MenuBar.prototype.appendMenu = function (level, menu) {
    win.menu.items[level].submenu.append(menu);
  };

  MenuBar.prototype.createFileMenu = function () {
    var fileMenu = new gui.MenuItem({
      label: 'File',
      submenu: new gui.Menu()
    });

    win.menu.insert(fileMenu, 1);

    this.appendMenu(1, new gui.MenuItem({
      label: 'New File',
      click: function () {
        GuiUtils.newFile();
      }
    }));

    this.appendMenu(1, new gui.MenuItem({
      type: 'separator'
    }));

    this.appendMenu(1, new gui.MenuItem({
      label: 'Open...',
      click: function () {
        FileUtils.OpenNewFile();
      }
    }));

    this.appendMenu(1, new gui.MenuItem({
      label: 'Save',
      click: function () {
        FileUtils.saveNewOrUpdate();
      }
    }));

    this.appendMenu(1, new gui.MenuItem({
      label: 'Save As...',
      click: function () {
        FileUtils.chooseFile('#gui-save');
      }
    }));

    this.appendMenu(1, new gui.MenuItem({
      label: 'Quit',
      click: function () {
        gui.Window.get().close();
      }
    }));
  };

  new MenuBar();
})();
