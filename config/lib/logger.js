/**
 * @name Error, warning, info logger
 * @description 错误 警告 信息打印
 */
const gutil = require('gulp-util');

function Log(taskName, message) {
  this.error = function error() {
    throw new gutil.PluginError({
      plugin: taskName,
      message: gutil.colors.blue(message),
    });
  };
  this.info = function info() {
    gutil.log(taskName, gutil.colors.magenta(message));
  };
}

module.exports = Log;
