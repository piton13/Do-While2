var session = require('express-session'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function (app) {
    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(session({secret: 'keyboard cat'}));
    require('./passport')(app);
    app.use(methodOverride());
};