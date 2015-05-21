/**
 * @ngInject
 */
module.exports = function ($templateCache) {
    return {
        restrict: 'E',
        required: '^dwProjectList',
        replace: true,
        transclude: true,
        scope: {
            project: '='
        },
        template: $templateCache.get('projectItem.template.html')
    };
};
