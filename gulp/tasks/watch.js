'use strict';

import gulp from 'gulp';
import paths from  '../config';
import watch from 'gulp-watch';

gulp.task('watch', ['build'], () => {
  watch(paths.source.scripts, () => {
    gulp.start('build:scripts');
  });
  watch(paths.source.css, () => {
    gulp.start('build:css');
  });
  watch(paths.source.html, () => {
    gulp.start('build:html');
  });
  watch(paths.source.img, () => {
    gulp.start('build:img');
  });
});
