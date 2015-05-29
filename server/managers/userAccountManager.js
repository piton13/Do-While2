var Account = require('../models/account'),
    User = require('../models/user'),
    Q = require('q');

var userAccountManager = {};

userAccountManager.authorizeByAccount = function (account) {
    return userAccountManager.getUserByAccount(account)
        .fail(function (err) {
            if (err.message === 'no account')
                return userAccountManager.createUserByAccount(account);
            throw new Error(err);
        });
};

userAccountManager.getUserByAccount = function (account) {
    return Q.nfcall(
        Account.findOne({
            id: account.id
        }).exec)
        .then(function (account) {
            if (!account)
                throw new Error('no account');
            return account._user;
        });
};

userAccountManager.createUserByAccount = function (account) {
    var userName = account.displayName;

    var user = new User({
        name: userName
    });

    return user
        .trySaveAccount(new Account(account))
        .then(function () {
            return Q(user.save());
        });
};

module.exports = userAccountManager;