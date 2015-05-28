/**
 * @ngInject
 */
module.exports = function ($templateCache) {
    return {
        restrict: 'E',
        required: '^dwWeekNav',
        replace: true,
        transclude: true,
        scope: {
          day: '=week',
          showedDays: '=showed'
        },
        // controller: require('./weekDay.directive.controller'),
        controllerAs: 'week',
        template: $templateCache.get('weekDay.template.html')
    };
};
