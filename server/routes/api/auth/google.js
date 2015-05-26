var express = require('express'),
    router = express.Router(),
    passport = require('passport');

router.get('/',
    passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/plus.login'],
        failureRedirect: '/#/signIn'
    }),
    function (req, res) {
        res.redirect('/');
    }
);

module.exports = router;