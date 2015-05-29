var passport = require('passport'),
    userSerializer = require('./userSerializer'),
    googleStrategy = require('./googleStrategy');

module.exports = function (app) {

    passport.serializeUser(userSerializer.serialize);
    passport.deserializeUser(userSerializer.deserialize);
    passport.use(googleStrategy);

    app.use(passport.initialize());
    app.use(passport.session());
};