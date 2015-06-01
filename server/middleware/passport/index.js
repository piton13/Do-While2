var passport = require('passport'),
    userSerializer = require('./userSerializer'),
    googleStrategy = require('./googleStrategy'),
    bearerStrategy = require('./bearerStrategy');

module.exports = function (app) {

    app.use(passport.initialize());

    passport.serializeUser(userSerializer.serialize);
    passport.deserializeUser(userSerializer.deserialize);
    passport.use(googleStrategy);
    passport.use(bearerStrategy);
};