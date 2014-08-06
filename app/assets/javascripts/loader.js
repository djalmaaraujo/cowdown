var fs = require('fs');
console.log('loader');

$(function () {
  var data = fs.readFileSync('./app/assets/help.md');

  $('.cowdown-code textarea').val(data.toString('utf-8'));

  CowdowApp.updatePreview();
});
