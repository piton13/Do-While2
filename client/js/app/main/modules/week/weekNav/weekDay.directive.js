/**
 * @ngInject
 */
module.exports = function () {
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
        templateUrl: 'weekDay.template.html'
    };
};
