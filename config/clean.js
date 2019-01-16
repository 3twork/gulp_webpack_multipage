/**
 * Cleaner
 */
const gulp = require('gulp');
const del = require('del');

const config = require('./config');

gulp.task('clean', () => {
  const folderDelete = [config.root.dist];
  if (config.root.dist === './') {
    folderDelete.push('./public', '*.html');
  }
  del.sync(folderDelete);
});
