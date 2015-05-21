/**
 * @ngInject
 */
module.exports = function ($templateCache) {
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
        template: $templateCache.get('taskItem.template.html')
    };
};
