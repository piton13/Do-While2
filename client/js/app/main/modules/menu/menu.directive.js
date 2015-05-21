/**
 * @ngInject
 */
module.exports = function ($templateCache) {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        controller: require('./menu.directive.controller'),
        controllerAs: 'menu',
        template: $templateCache.get('menu.template.html')
    };
};