var fs = require('fs');

$(function () {
  var data = fs.readFileSync('./app/assets/help.md');

  $('.cowdown-code textarea').val(data.toString('utf-8'));

  CowdowApp.updatePreview();
  CowdowApp.code.focus();
});
