var Stream = require('stream'),
    gutil = require('gulp-util');

function collectionUniqueChecker() {
    var items = [],
        isUnique = true;
    return {
        add: function (item) {
            isUnique = items.indexOf(item) === -1;
            items.push(item);
        },
        isUnique: function () {
            return isUnique;
        }
    }
}

function gulpUniqueFilesCheck(params) {
    var stream = new Stream.Transform({objectMode: true}),
        filesUniqueChecker = collectionUniqueChecker(),
        warning = gutil.colors.yellow,
        target = gutil.colors.blue;

    params = sanitizeParams(params);

    stream._transform = function (file, unused, callback) {
        var fileMap = params.fileMap(file);
        filesUniqueChecker.add(fileMap);
        if (!filesUniqueChecker.isUnique())
            gutil.log(
                warning('!!! Warning'),
                gutil.template(params.logTemplate, {
                    file: file,
                    path: target(defaultFileMapCallback(file)),
                    name: target(fileMap)
                }));
        callback(null, file);
    };

    function sanitizeParams(params) {
        if (typeof params === 'undefined')
            params = {};

        if (typeof params.logTemplate === 'undefined')
            params.logTemplate = 'File ${ path } is not unique!';

        if (typeof params.fileMap === 'undefined')
            params.fileMap = defaultFileMapCallback;

        return params;
    }

    function defaultFileMapCallback(file) {
        return file.relative;
    }

    return stream;

}

module.exports = gulpUniqueFilesCheck;
