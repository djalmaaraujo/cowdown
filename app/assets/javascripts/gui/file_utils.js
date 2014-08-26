(function () {
  var FileUtils = {
    chooseFile: function (name) {
      var chooser = $(name);

      chooser.change(function(e) {
        var filePath = $(this).val()
        var code     = CowdowApp.getCode()
        var name     = FileUtils.getFileName(filePath)

        FileUtils.updateFile(filePath, code);

        FILEOPTS.saved    = true;
        FILEOPTS.opened   = true;
        FILEOPTS.fileName = name;
        FILEOPTS.filePath = filePath;

        $('.header-title').html(name + ' saved!');

        e.preventDefault();
      });

      chooser.trigger('click');
    },

    getFileName: function(filePath) {
      return filePath.split('/').reverse()[0];
    },

    saveNewOrUpdate: function() {
      if (FILEOPTS.opened) {
        FileUtils.updateFile(FILEOPTS.filePath);
        $('.header-title').html(FILEOPTS.fileName + ' updated!');
      }
      else {
        FileUtils.chooseFile('#gui-save');
      }
    },

    updateFile: function(filePath) {
      var code = CowdowApp.getCode();

      fs.writeFile(filePath, code);
    }
  };

  window.FileUtils = FileUtils;
})();
