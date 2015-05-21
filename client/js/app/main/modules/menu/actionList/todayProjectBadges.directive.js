/**
 * @ngInject
 */
module.exports = function ($templateCache) {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        scope: {},
        controller: require('./todayProjectBadges.directive.controller.js'),
        controllerAs: 'badges',
        template: $templateCache.get('todayProjectBadges.template.html')
    };
};