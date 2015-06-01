var db = require('./../bootstrap/db.connection.js');

var AccountEmailSchema = db.mongoose.Schema({
    type: String,
    value: String
});

var AccountSchema = db.mongoose.Schema({
    providerId: String,
    provider: String,
    _user: {type: db.mongoose.Schema.ObjectId, ref: 'users'},
    emails: [AccountEmailSchema]
});

module.exports = db.connection.model('accounts', AccountSchema);