var gulp = require('gulp'),
    del = require('del'),
    config = require('../config');

gulp.task('copy:fonts', ['clean:fonts'], function () {
    return gulp.src(config.patterns.src.fonts)
        .pipe(gulp.dest(config.paths.dist.fonts));
});

gulp.task('clean:fonts', function (onDone) {
    del(config.patterns.dist.fonts, onDone);
});