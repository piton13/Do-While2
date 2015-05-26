/**
 * @ngInject
 */
module.exports = function ($templateCache) {
    return {
        restrict: 'E',
        required: '^dwWeekNav',
        replace: true,
        transclude: true,
        controllerAs: 'week',
        template: $templateCache.get('weekDay.template.html')
    };
};
