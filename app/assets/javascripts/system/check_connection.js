module.exports = {
  isConnected: function (cb) {
    require('dns').resolve('github.com', function (err) {
      return (err) ? cb(false) : cb(true);
    });
  }
}
