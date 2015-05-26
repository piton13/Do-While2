/**
 * @ngInject
 */
module.exports = function () {
    return function (items, begin) {
        return items.slice(begin);
    };
};
