/**
 * @ngInject
 */
module.exports = function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        controller: require('./menu.directive.controller'),
        controllerAs: 'menu',
        templateUrl: 'menu.template.html'
    };
};