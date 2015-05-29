var db = require('./../bootstrap/db.connection.js'),
    Schema = db.mongoose.Schema;

const USER_MODEL_NAME = 'users';

var UserSchema = Schema({
    accounts: [{type: Schema.ObjectId, ref: 'accounts'}],
    name: String,
    email: String,
    photo: String
});

module.exports = db.connection.model(USER_MODEL_NAME, UserSchema);