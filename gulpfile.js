'use strict';
var gulp = require('gulp'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    LessPluginAutoPrefix = require("less-plugin-autoprefix"),
    autoprefix = new LessPluginAutoPrefix({
        browsers: [
            'last 4 versions',
            "ie >= 7"
        ]
    });
gulp.task('less', function() {
    gulp.src('./pages/*.less')
        .pipe(less({plugins: [autoprefix]}))
        .pipe(gulp.dest('./pages'));
});
gulp.task('js', function() {
    gulp.src('./pages/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./pages'));
});
gulp.task('watch', function() {
    gulp.watch('./pages/*.less', ['less']);
});
gulp.task('default', []);
gulp.task('init', ['less', js]);