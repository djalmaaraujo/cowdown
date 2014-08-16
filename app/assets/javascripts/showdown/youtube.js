(function(){
  var youtube = function(converter) {
    return [
      { type: 'lang', filter: function(source){
          return source.replace(/\[youtube\]\(.*\?v=(.*)\)/gi, function(match, videoID) {
            if (videoID) {
              return '<img src="http://img.youtube.com/vi/' + videoID + '/0.jpg" />';
            }
          });
      }}
    ];
  };

  // Client-side export
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.youtube = youtube; }
  // Server-side export
  if (typeof module !== 'undefined') module.exports = youtube;
}());
