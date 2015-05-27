var layout = require('./layout.config');

var isTddMode = true;

module.exports = function (config) {
    config.set({
        port: 9876,
        frameworks: ['browserify', 'jasmine'],

        basePath: '',
        preprocessors: (function (pattern) {
            var preprocessors = {};
            preprocessors[pattern] = ['browserify'];
            return preprocessors;
        })(layout.patterns.src.js.tests),

        files: [].concat(layout.patterns.src.js.tests),

        reporters: ['progress'],
        colors: true,
        logLevel: config.LOG_INFO,

        browsers: ['Chrome']
    });
};