var GoogleOAuth2Strategy = require('passport-google-oauth').OAuth2Strategy,
    googleAppCredentials = require('../../auth.credentials.json').google,
    UserAccountManager = require('../../managers/userAccountManager');

function onUserAuthorized(accessToken, refreshToken, account, done) {
    UserAccountManager.authorizeByAccount(account)
        .then(function (user) {
            done(null, user);
        })
        .fail(function (err) {
            done(err, null);
        });
}
var googleOAuth2Strategy = new GoogleOAuth2Strategy(
    googleAppCredentials,
    onUserAuthorized
);

module.exports = googleOAuth2Strategy;