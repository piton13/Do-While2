var oop = require('../../../util/oop');

var AlreadyAuthorizedError = function () {
    Error.apply(this, arguments);
};

oop.inherits(AlreadyAuthorizedError, Error);

module.exports = AlreadyAuthorizedError;