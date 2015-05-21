/**
 * @ngInject
 */
module.exports = function ($templateCache) {
    return {
        restrict: 'E',
        required: '^dwTaskList',
        replace: false,
        transclude: false,
        scope: {
            task: '='
        },
        template: $templateCache.get('projectTaskItem.template.html')
    };
};
