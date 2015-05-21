/**
 * @ngInject
 */
module.exports = function ($templateCache) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: $templateCache.get('projectList.template.html')
    };
};