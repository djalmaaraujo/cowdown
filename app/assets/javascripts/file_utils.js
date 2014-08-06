(function () {
  var FileUtils = {
    chooseFile: function (name) {
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
  };

  window.FileUtils = FileUtils;
})();
