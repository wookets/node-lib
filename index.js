
module.exports = function(name) {
  var directory = __dirname + '/../../lib';
  if (name) {
    return require(directory + '/' + name);
  } else {
    return require(directory);
  }
}
