/**
 * @ngInject
 */
module.exports = function ($templateCache) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: $templateCache.get('taskList.template.html')
    };
};
