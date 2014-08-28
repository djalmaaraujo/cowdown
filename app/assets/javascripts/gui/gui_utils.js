(function () {
  var gui = require('nw.gui');

  var GuiUtils = {
    newFile: function() {
      gui.Window.open('index.html', {
        toolbar: false,
        frame: false
      });
    }
  };

  window.GuiUtils = GuiUtils;
})();
