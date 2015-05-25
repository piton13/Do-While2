var express = require('express'),
//  favicon = require('serve-favicon')
    path = require('path'),
    requireDir = require('require-dir');

module.exports = function (app) {
    var routes = requireDir('./');

    // todo: uncomment after placing your favicon in /public
    // app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use(express.static(path.join(__dirname, '../public')));

    app.use('/api', routes.api);

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
};