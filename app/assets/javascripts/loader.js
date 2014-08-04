var fs = require('fs');

var data = fs.readFileSync('./app/assets/help.md');
$('#code textarea').val(data.toString('utf-8'));

CowdowApp.makePreview();
CowdowApp.makeStats();
