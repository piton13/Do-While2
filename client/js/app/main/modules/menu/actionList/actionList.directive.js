/**
 * @ngInject
 */
module.exports = function ($templateCache) {
    return {
        restrict: 'E',
        require: '^dwMenu',
        replace: true,
        transclude: false,
        scope: {},
        template: $templateCache.get('actionList.template.html')
    };
};