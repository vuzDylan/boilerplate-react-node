var gulp = require('gulp');
var path = require('path');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var babelify = require('babelify');
var browserify = require('browserify');
var glob = require('glob');
var es = require('event-stream');

var root = "./client/pages/"

gulp.task('build', function(done) {
    glob('./client/pages/*.jsx', function(err, files) {
        if(err) done(err);
        var tasks = files.map(function(entry) {
            var filename = entry.replace(root, '');
            return browserify({
                    entries: [entry],
                    extensions: ['.jsx'],
                    debug: true
                }).transform("babelify", {presets: ["es2015", "react"]})
                .bundle()
                .pipe(source(filename))
                .pipe(rename({
                    extname: '.bundle.js'
                }))
                .pipe(gulp.dest('./dist'));
            });
        es.merge(tasks).on('end', done);
    });
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./client/**/*.jsx', ['build']);
});

gulp.task('default', ['watch']);
