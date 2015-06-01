var express = require('express'),
    router = express.Router(),
    GoogleSignInService = require('../../../services/googleSignInService'),
    signInService = new GoogleSignInService(),
    passport = require('passport');

router.get('/',
    passport.authenticate('google', {
        session: false,
        scope: [
            'https://www.googleapis.com/auth/plus.login',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    })
);

router.get('/callback',
    passport.authenticate('google', {
        session: false,
        failureRedirect: '/'
    }),
    function (req, res) {
        res.json({
            access_token : req.user.access_token
        });
    }
);

router.post('/', function (req, res, next) {
    var code = req.body.code;
    signInService.signIn(code)
        .then(function (token) {
            res.json(token);
        })
        .fail(next);
});

module.exports = router;
