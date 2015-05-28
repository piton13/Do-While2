/**
 * @ngInject
 */
module.exports = function () {
    return {
        restrict: 'E',
        required: '^dwTaskList',
        replace: true,
        transclude: true,
        scope: {
            task: '='
        },
        controller: require('./taskItem.directive.controller'),
        controllerAs: 'taskCtrl',
        templateUrl: 'taskItem.template.html'
    };
};