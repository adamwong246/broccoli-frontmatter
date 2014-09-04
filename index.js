var Writer = require('broccoli-writer');

module.exports = MyCompiler;
MyCompiler.prototype = Object.create(Writer.prototype);
MyCompiler.prototype.constructor = MyCompiler;

function MyCompiler (arg1, arg2) {
  if (!(this instanceof MyCompiler)) return new MyCompiler(arg1, arg2, ...);

};

MyCompiler.prototype.write = function (readTree, destDir) {

};