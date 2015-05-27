/**
 * @ngInject
 */
module.exports = function () {
    return {
        restrict: 'E',
        required: '^dwTaskList',
        replace: false,
        transclude: false,
        scope: {
            task: '='
        },
        templateUrl: 'todayTaskItem.template.html'
    };
};
