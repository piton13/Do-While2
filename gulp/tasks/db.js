var gulp = require('gulp'),
	gutil = require('gulp-util'),
	exec = require('child_process').exec,
	config = require('../../layout.config'),

	warning = gutil.colors.yellow,
	target = gutil.colors.blue('mongodb');

gulp.task('db', function () {
	var mongod = exec('mongod --dbpath ' + config.paths.data);

	mongod.stdout.on('data', function (data) {
		gutil.log(target, data);
	});

	mongod.stderr.on('data', function (data) {
		gutil.log(target, warning(data));
	});

	mongod.on('close', function (code) {
		gutil.log(target, 'exited with code ', code);
	});
});