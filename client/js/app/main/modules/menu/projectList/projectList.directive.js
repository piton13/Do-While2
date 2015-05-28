/**
 * @ngInject
 */
module.exports = function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'projectList.template.html'
    };
};