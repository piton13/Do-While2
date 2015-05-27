var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    config = require('../../layout.config'),
    errorDebug = require('../lib/error-debug');

function buildScss() {
    return gulp.src(config.paths.src.scss.main)
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer({
            browsers: ['> 5%', 'last 2 version', 'IE 9']
        }))
        .pipe(gulp.dest(config.paths.dist.css))
        .pipe(browserSync.reload({stream: true}));
}

gulp.task('build:scss', ['build:img:icons', 'clean:css'], function () {
    return buildScss();
});

gulp.task('build:scss_light', ['clean:css'], function () {
    return buildScss()
});

gulp.task('clean:css', function (onDone) {
    del(config.patterns.dist.css, errorDebug(onDone));
});


