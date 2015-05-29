var db = require('./../bootstrap/db.connection.js'),
    Q = require('q'),
    Schema = db.mongoose.Schema;

const USER_MODEL_NAME = 'users';

var UserSchema = Schema({
    accounts: [{type: Schema.ObjectId, ref: 'Accounts'}],
    name: String,
    email: String,
    photo: String
});

UserSchema.methods.trySaveAccount = function (account) {
    var user = this.model(USER_MODEL_NAME);
    return this.tryGetAccount(account.provider)
        .fail(function (err) {
            if (err.message === 'no accounts') {
                user.accounts.push(account._id);
                account._user = user._id;
                return Q(account.save());
            }
        });
};

UserSchema.methods.tryGetAccount = function (accountProvider) {
    return Q.fcall(this.model(USER_MODEL_NAME)
        .populate('accounts', 'provider', {
            provider: accountProvider
        }).exec)
        .then(function (user) {
            var accounts = user.accounts;
            if (!accounts.length)
                throw new Error('no accounts');
            return accounts[0];
        });
};

module.exports = db.connection.model(USER_MODEL_NAME, UserSchema);