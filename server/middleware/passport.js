var passport = require('passport'),
    GoogleOAuth2Strategy = require('passport-google-oauth').OAuth2Strategy,
    googleAppCredentials = require('../auth.credentials.json').google;

module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });

    passport.use(
        new GoogleOAuth2Strategy(
            googleAppCredentials,
            function (accessToken, refreshToken, profile, done) {
                process.nextTick(function () {
                    // TODO write user in db
                    return done(null, profile);
                });
            }
        )
    );
};