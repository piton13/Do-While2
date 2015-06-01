var GoogleOAuth2Strategy = require('passport-google-oauth').OAuth2Strategy,
    googleAppCredentials = require('../../auth.credentials.json').google,
    userAccountService = require('../../services/userAccountService');

function onUserAuthorized(accessToken, refreshToken, account, done) {
    userAccountService.getUserByAccount(account)
        .then(function (user) {
            done(null, user);
        })
        .fail(function (err) {
            if (err.message === 'no account')
                return userAccountService.createUserByAccount(account, accessToken)
                    .then(function (user) {
                        done(null, user);
                    });
            throw new Error(err);
        });
}
var googleOAuth2Strategy = new GoogleOAuth2Strategy(
    googleAppCredentials,
    onUserAuthorized
);

module.exports = googleOAuth2Strategy;