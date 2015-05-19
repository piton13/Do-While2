/**
 * @ngInject
 */
module.exports = function (viewResolver) {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        scope: {},
        controller: require('./todayProjectBadges.directive.controller.js'),
        controllerAs: 'badges',
        templateUrl: viewResolver.resolve('todayProjectBadges.template.html', __dirname)
    };
};