(function(){

    var youtube = function(converter) {
        return [
            { type: 'lang', filter: function(source){
                return source.replace(/\[youtube\]\(.*\?v=(.*)\)/gi, function(match, videoID) {
                    if (videoID) {
                      return '<iframe width="100%" height="480" src="https://www.youtube.com/embed/' + videoID + '" frameborder="0" allowfullscreen></iframe>';
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
