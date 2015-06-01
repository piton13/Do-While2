var oop = require('../../../util/oop');

var UnauthorizedError = function () {
    Error.apply(this, arguments);
};

oop.inherits(UnauthorizedError, Error);

module.exports = UnauthorizedError;