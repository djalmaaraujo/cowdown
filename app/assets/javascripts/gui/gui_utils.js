(function () {
  var gui = require('nw.gui');

  window.GuiUtils = {
    newFile: function() {
      gui.Window.open('index.html', {
        toolbar: false,
        frame: false
      });
    }
  };
})();
