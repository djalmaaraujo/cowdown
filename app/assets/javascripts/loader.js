(function () {
  var fs = require('fs');

  var FileLoader = {
    load: function(filePath) {
      if (fs.existsSync(filePath)) {
        var data = fs.readFileSync(filePath);

        if (data) {
            FILEOPTS.saved    = true;
            FILEOPTS.opened   = true;
            FILEOPTS.fileName = FileUtils.getFileName(filePath);
            FILEOPTS.filePath = filePath;

          $('.cowdown-code textarea').val(data.toString('utf-8'));

          CowdowApp.code.focus();
          CowdowApp.updatePreview();
        }
      }
    }
  };

  window.FileLoader = FileLoader;
})();
