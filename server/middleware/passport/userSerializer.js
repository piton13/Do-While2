var User = require('../../models/user');

function serialize(user, done) {
    var error = null,
        id = null;
    if (user instanceof User) {
        id = user.id;
    } else {
        error = new Error('invalid user');
    }
    done(error, id);
}

function deserialize(id, done) {
    User.findOne({
        id: id
    }).exec(done);
}

module.exports = {
    serialize: serialize,
    deserialize: deserialize
};
