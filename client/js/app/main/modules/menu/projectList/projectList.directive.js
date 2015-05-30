/**
 * @ngInject
 */
module.exports = function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        controller: require('./projectList.directive.controller'),
        controllerAs: 'projectList',
        templateUrl: 'projectList.template.html'
    };
};