var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    GoogleOAuth2Strategy = require('passport-google-oauth').OAuth2Strategy;

var googleAppCredentials = require('./auth.credentials.json').google;

passport.use(
    new GoogleOAuth2Strategy(
        googleAppCredentials,
        function (accessToken, refreshToken, profile, done) {
            process.nextTick(function () {

                // To keep the example simple, the user's Google profile is returned to
                // represent the logged-in user.  In a typical application, you would want
                // to associate the Google account with a user record in your database,
                // and return that user instead.
                return done(null, profile);
            });
        }
    )
);

router.get('/',
    passport.authenticate('google', {failureRedirect: '/login'}),
    function (req, res) {
        res.redirect('/');
    }
);

module.exports = router;