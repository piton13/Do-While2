var Account = require('../models/account'),
    User = require('../models/user'),
    Q = require('q'),
    url = require('url');

var userAccountService = {};

userAccountService.getUserByAccount = function (account) {
    return Q(Account.findOne({
        providerId: account.id
    }).populate('_user').exec())
        .then(function (account) {
            if (!account)
                throw new Error('no account');
            return account._user;
        });
};

userAccountService.createUserByAccount = function (account, accessToken) {
    var user = new User({
        name: account.displayName,
        email: tryGetArrayFirstObjectValueProperty(account.emails),
        photo: urlRemoveQueryParams(tryGetArrayFirstObjectValueProperty(account.photos)),
        access_token: accessToken
    });

    return Q(user.save())
        .then(function (user) {
            return trySaveAccount(user, account)
                .then(function () {
                    return Q(user.save());
                });
        });
};

function trySaveAccount(user, account) {
    var providerId = account.id;
    account = new Account(account);
    account.providerId = providerId;
    user.accounts.push(account._id);
    account._user = user._id;
    return Q(account.save());
}

function tryGetArrayFirstObjectValueProperty(array) {
    if (!array.length)
        return null;
    return array[0].value;
}

function urlRemoveQueryParams(_url) {
    if (!_url)
        return null;
    _url = url.parse(_url);
    return _url.protocol + '//' + _url.host + _url.pathname;
}

module.exports = userAccountService;