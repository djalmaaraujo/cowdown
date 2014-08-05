var fs = require('fs');

var data = fs.readFileSync('./app/assets/help.md');
$('.cowdown-code textarea').val(data.toString('utf-8'));

CowdowApp.makePreview();
CowdowApp.makeStats();
