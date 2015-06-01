var Q = require('q'),
    BaseSignInService = require('./base/signInService'),
    credentials = require('../auth.credentials.json').google,
    google = require('googleapis'),
    plus = google.plus('v1'),
    OAuth2 = google.auth.OAuth2;

function GoogleSignInService() {
    BaseSignInService.call(this);
    this._oauth2 = new OAuth2(
        credentials.clientID,
        credentials.clientSecret,
        'postmessage'
    );
}

GoogleSignInService.prototype = new BaseSignInService;

GoogleSignInService.prototype.signIn = function (code) {
    var self = this,
        _token;
    return self._exchangeAccessToken(code)
        .then(function (token) {
            _token = token;
            return self._getAccount();
        })
        .then(function (account) {
            return self._onAccountRetrieved(_token, account);
        })
        .then(function () {
            return _token;
        });
};

GoogleSignInService.prototype._normalizeAccount = function (googleAccount) {
    var account = {provider: 'google'};
    account.id = googleAccount.id;
    account.displayName = googleAccount.displayName;
    if (googleAccount.name) {
        account.name = {
            familyName: googleAccount.name.familyName,
            givenName: googleAccount.name.givenName
        };
    }
    if (googleAccount.emails) {
        account.emails = [];
        for (i = 0, len = googleAccount.emails.length; i < len; ++i)
            account.emails.push({value: googleAccount.emails[i].value, type: googleAccount.emails[i].type});
    }

    if (googleAccount.image)
        account.photos = [{value: googleAccount.image.url}];

    account.gender = googleAccount.gender;

    return account;
};

GoogleSignInService.prototype._exchangeAccessToken = function (code) {
    var self = this;
    return Q.ninvoke(this._oauth2, 'getToken', code)
        .then(function (tokens) {
            var accessToken = tokens[0];
            self._oauth2.setCredentials(accessToken);
            return accessToken;
        });
};

GoogleSignInService.prototype._getAccount = function () {
    return Q.ninvoke(plus.people, 'get', {userId: 'me', auth: this._oauth2})
        .then(function (response) {
            var user = response[0];
            if (!response)
                throw new Error('no user fetched');
            return user;
        });
};

module.exports = GoogleSignInService;
