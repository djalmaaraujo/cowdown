# Moooooooooo

Welcome to Cowdown. Just another Markdown application.


# Titles
## Titles
### Titles
#### Titles
##### Titles
###### Titles

## Images
![image](https://raw.githubusercontent.com/djalmaaraujo/cowdown/master/preview.png)

## Table Extension

| Col 1    | Col 2     |
|========  |===========|
| Column 1 | Ok text =)|
| Column 1 | Ok text =)|
| Column 1 | Ok text =)|
| Column 1 | Ok text =)|
| Column 1 | Ok text =)|
| Column 1 | Ok text =)|

## Twitter Extension

#hashtag #helloworld #cowdown

@djalmaaraujo @anotherusername

## Github Extension
~~strike trough~~

## Google prettify

<code>
var fs = require('fs');
console.log('loader');

$(function () {
  var data = fs.readFileSync('./app/assets/help.md');

  $('.cowdown-code textarea').val(data.toString('utf-8'));

  CowdowApp.updatePreview();
});

</code>
