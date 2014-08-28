(function () {
  COWDOWN_TITLE = 'Cowdown';
  EXTENSIONS    = ['prettify', 'table', 'twitter', 'youtube', 'vimeo', 'github', 'gravatar'];

  Cowdow = function (converter) {
    this.code          = $('.cowdown-code textarea');
    this.preview       = $('.cowdown-preview');
    this.documentTitle = $('.header-title');
    this.converter     = new converter({ extensions: EXTENSIONS });

    this.listener();
  };

  Cowdow.prototype.listener = function () {
    var self = this;

    self.code.on('keyup', function () {
      self.updatePreview();
    });

    self.code.on('paste', function () {
      setTimeout(function () {
        self.updatePreview();
      }, 100);
    });
  };

  Cowdow.prototype.getCode = function() {
    return this.code.val();
  };

  Cowdow.prototype.makeStats = function() {
    var chars = this.getCode().length;

    this.documentTitle.html(COWDOWN_TITLE + ' - ' + chars + ' chars');
  };

  Cowdow.prototype.makePreview = function() {
    this.html = this.converter.makeHtml(this.getCode());
    this.preview.html(this.html);
  };

  Cowdow.prototype.updatePreview = function() {
    this.makePreview();
    this.makeStats();
  };

  window.Cowdow = Cowdow;
})();
