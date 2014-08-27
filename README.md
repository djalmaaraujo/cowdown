# Cowdown - Another markdown app

![image](http://i.imgur.com/tuOMoHp.png?1)

#### Mooooooooooo.
A simple app using node-webkit.

## Download
* Mac OS: [Download Here](http://db.orangedox.com/neD5HdbCvpzjMoZva3/Cowdown.dmg) (~35mb)
* Linux: (soon)
* Windows: (soon)

## Features/Goals
* ~~Github strike trough like~~
* ~~Twitter #hashtag and @username links~~
* ~~Table style support~~
* ~~Youtube Extension added.~~ To use ```[youtube](https://youtubelink)```
* ~~Vimeo Extension added.~~ To use ```[vimeo](https://vimeolinknk)```
* Keyboard shortcuts
  * ~~Save (cmd+S)~~
  * ~~New File (cmd+n)~~
  * ~~Open File (cmd+o)~~
  * ~~Indentation Inside Textarea (tab or shift+tb or cmd+[ or cmd+])~~
* ~~Full Screen mode~~
* Better code highlight
* ~~Keyboard shortcuts~~
* ~~Close this file menu item~~
* Export HTML
* ~~Export to PDF~~ (You can print)
* Themes

## How to contribute (Will add grunt/gulp later)
* gem install compass
* bower install
* /path/to/nw .
* Make CSS chances on the SASS directory
* Run ```compass watch```

## Build Proccess (For Mac)
1. Go to cowdown root folder
2. Zip folder ```zip -r ../${PWD##*/}.nw *``` (remove build & brand folder before)
3. Rename cowdown.nw to app.nw
4. Replace app.nw in /Applications/CowDown.app/Contents/Resources with
5. Paste CowDown.app into build folder
6. Edit info.plist with new versions
7. Go to terminal, run ```appdmg appdmg.json CowDown.dmg```
8. Done. (Sorry, still working on an automated proccess)

## Authors
* Djalma Araújo
* Vitor Fernandes (Designer) [Dribbble](https://dribbble.com/shots/1700292-Cowdown-Icon?list=users&offset=0)

## Screenshot
![image](http://i.imgur.com/CwC6ePx.png?)

## License
[MIT License](http://djalmaaraujo.mit-license.org)

---------------------------
[cc company](http://nossomos.cc) - Code Consultants and Open Source Coding

