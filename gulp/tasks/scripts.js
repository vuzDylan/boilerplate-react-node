import gulp from 'gulp';
import source from 'vinyl-source-stream';
import browserify from 'browserify';
import babelify from 'babelify';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';
import config from '../config';
import handleErrors from '../util/handle-errors';
import notify from 'gulp-notify';
import livereload from 'gulp-livereload';

gulp.task('build:scripts',  () =>  {
  let bundle = browserify({
    extensions: ['.jsx'],
    debug: process.env.NODE_ENV !== 'production',
  })
    .transform("babelify", {presets: ["es2015", "react"]})
    .add(config.source.jsMain)
    .bundle()
    .on('error', handleErrors)
    .pipe(source('main.js'));

  if (process.env.NODE_ENV === 'production') {
    bundle = bundle
      .pipe(buffer())
      .pipe(uglify());
  }
  return bundle
    .pipe(gulp.dest(config.build.js))
    .pipe(notify('Scripts done!'))
    .pipe(livereload());
});
