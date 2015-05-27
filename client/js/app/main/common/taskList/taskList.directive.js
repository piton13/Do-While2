/**
 * @ngInject
 */
module.exports = function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'taskList.template.html'
    };
};