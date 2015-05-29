var db = require('./../bootstrap/db.connection.js');

var AccountEmailSchema = db.mongoose.Schema({
    type: String,
    value: String
});

var AccountSchema = db.mongoose.Schema({
    id: String,
    _user: {type: db.mongoose.Schema.ObjectId, ref: 'Users'},
    provider: String,
    emails: [AccountEmailSchema]
});

module.exports = db.connection.model('Accounts', AccountSchema);