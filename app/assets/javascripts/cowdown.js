(function () {
  COWDOWN_TITLE = 'Cowdown';

  Cowdow = function (converter) {
    this.code = $('.cowdown-code textarea');
    this.preview = $('.cowdown-preview');
    this.converter = new converter({ extensions: ['github', 'prettify', 'table', 'twitter'] });
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
    document.title = COWDOWN_TITLE + ' - ' + chars + ' chars';
  };

  Cowdow.prototype.makePreview = function() {
    this.html = this.converter.makeHtml(this.getCode());
    this.preview.html(this.html);
  };

  Cowdow.prototype.updatePreview = function() {
    this.makePreview();
    this.makeStats();
  };
})();
