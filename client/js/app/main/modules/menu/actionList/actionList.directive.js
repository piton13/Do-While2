/**
 * @ngInject
 */
module.exports = function () {
    return {
        restrict: 'E',
        require: '^dwMenu',
        replace: true,
        transclude: false,
        scope: {},
        templateUrl: 'actionList.template.html'
    };
};