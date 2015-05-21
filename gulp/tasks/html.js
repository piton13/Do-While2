var gulp = require('gulp'),
    rename = require('gulp-rename'),
    templateCache = require('gulp-angular-templatecache'),
    browserSync = require('browser-sync'),
    fileInclude = require('gulp-file-include'),
    del = require('del'),
    path = require('path'),
    config = require('../config'),
    errorDebug = require('../lib/error-debug');

gulp.task('build:html', ['build:html:pages', 'build:html:markup']);


gulp.task('build:html:pages', ['clean:html:pages'], function () {
    return gulp.src(config.patterns.src.html.pages)
        .pipe(fileInclude())
        .on('error', errorDebug.errorHandler())
        .pipe(gulp.dest(config.paths.dist.html.pages))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('clean:html:pages', function (onDone) {
    del(config.patterns.dist.html.pages, errorDebug(onDone));
});

gulp.task('build:html:markup', ['clean:html:markup'], function () {
    return gulp.src(config.paths.src.html.markup.all_pages)
        .pipe(fileInclude())
        .on('error', errorDebug.errorHandler())
        .pipe(gulp.dest(config.paths.dist.html.markup));
});

gulp.task('clean:html:markup', function (onDone) {
    del(config.patterns.dist.html.markup, errorDebug(onDone));
});

gulp.task('build:html:templatecache.js', function () {
    return gulp.src(config.patterns.src.html.views)
        .pipe(rename({
            dirname: ''
        }))
        .pipe(templateCache({
            filename: 'templateCache.run.js',
            templateHeader: '/*@ngInject*/ module.exports = function($templateCache) {',
            templateFooter: '};'
        }))
        .pipe(gulp.dest(config.paths.src.js.templateCache))
        .pipe(browserSync.reload({stream: true}));
});