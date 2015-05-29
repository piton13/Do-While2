var express = require('express'),
    router = express.Router(),
    passport = require('passport');

router.get('/',
    passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/plus.login',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    })
);

router.get('/callback',
    passport.authenticate('google', {
        successRedirect: '/'
    })
);

module.exports = router;