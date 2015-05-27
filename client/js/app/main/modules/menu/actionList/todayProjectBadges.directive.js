/**
 * @ngInject
 */
module.exports = function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        scope: {},
        controller: require('./todayProjectBadges.directive.controller.js'),
        controllerAs: 'badges',
        templateUrl: 'todayProjectBadges.template.html'
    };
};