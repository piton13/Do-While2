var userAccountService = require('../userAccountService');

function SignInService() {
}

SignInService.prototype._onAccountRetrieved = function (token, account) {
    var accessToken = token.access_token;
    account = this._normalizeAccount(account);
    return userAccountService.getUserByAccount(account)
        .fail(function (err) {
            if (err.message === 'no account')
                return userAccountService.createUserByAccount(account, accessToken);
            throw new Error(err);
        });
};

SignInService.prototype._normalizeAccount = function (account) {
    throw  new Error('Abstract method call');
};

module.exports = SignInService;