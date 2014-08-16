(function(){
  var request     = require('request');
  var Q           = require('q');
  var VIMEO_CACHE = [];
  var THUMB_TPL   = '<img src="{{imgSrc}}" alt="{{videoTitle}}" />';
  var vimeoAPI    = 'http://vimeo.com/api/v2/video/{{id}}.json';

  getThumbTemplate = function (videoID) {
    var defer = Q.defer();

    if (VIMEO_CACHE[videoID]) {
      defer.resolve(parseVideoJson(VIMEO_CACHE[videoID]));
    }

    request({
      url: vimeoAPI.replace('{{id}}', videoID),
      method: 'GET',
      json: true
    }, function (error, response, body) {
      if (error) { defer.reject('not-found.png'); }

      VIMEO_CACHE[videoID] = body[0];

      defer.resolve(parseVideoJson(body[0]));
    });

    return defer.promise;
  };

  parseVideoJson = function (json) {
    var tpl = THUMB_TPL;

    tpl = tpl.replace('{{imgSrc}}', json.thumbnail_large);
    tpl = tpl.replace('{{videoTitle}}', json.title);

    return tpl;
  };

  var vimeo = function(converter) {
    return [
      { type: 'lang', filter: function(source) {
        return source.replace(/\[vimeo\]\(.*vimeo.com\/(.*)\)/gi, function(match, videoID) {
          if (VIMEO_CACHE[videoID]) {
            return parseVideoJson(VIMEO_CACHE[videoID]);
          }
          else {
            getThumbTemplate(videoID).then(function (thumb) {
              CowdowApp.updatePreview();
            });

            return '';
          }
        });
      }}
    ];
  };

  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.vimeo = vimeo; }
  if (typeof module !== 'undefined') module.exports = vimeo;
}());
