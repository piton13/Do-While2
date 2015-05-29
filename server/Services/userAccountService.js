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

userAccountService.createUserByAccount = function (account) {
    function tryGetFirstValue(array) {
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

    var user = new User({
        name: account.displayName,
        email: tryGetFirstValue(account.emails),
        photo: urlRemoveQueryParams(tryGetFirstValue(account.photos))
    });

    return Q(user.save())
        .then(function (user) {
            return userAccountService.trySaveAccount(user, account)
                .then(function () {
                    return Q(user.save());
                });
        });
};

userAccountService.trySaveAccount = function (user, account) {
    var providerId = account.id;
    account = new Account(account);
    account.providerId = providerId;
    user.accounts.push(account._id);
    account._user = user._id;
    return Q(account.save());
};

module.exports = userAccountService;