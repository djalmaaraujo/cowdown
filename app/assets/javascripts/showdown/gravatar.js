(function(){
  var crypto = require('crypto');

  var gravatar = function(converter) {
    return [
      { type: 'lang', filter: function(source){
          return source.replace(/\[gravatar\]\((.*)\)/gi, function(match, email) {
            if (email) {
              var md5 = crypto.createHash('md5').update(email).digest("hex");

              return '<img src="http://www.gravatar.com/avatar/' + md5 + '?s=640" />';
            }
          });
      }}
    ];
  };

  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.gravatar = gravatar; }
  if (typeof module !== 'undefined') module.exports = gravatar;
}());
