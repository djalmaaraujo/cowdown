(function(){
  var vimeo = function(converter) {
    return [
      { type: 'lang', filter: function(source) {
          return source.replace(/\[vimeo\]\(.*vimeo.com\/(.*)\)/gi, function(match, videoID) {
            if (videoID) {
              return '<iframe src="https://player.vimeo.com/video/' + videoID + '" width="100%" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            }
          });
      }}
    ];
  };

  // Client-side export
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.vimeo = vimeo; }
  // Server-side export
  if (typeof module !== 'undefined') module.exports = vimeo;
}());
