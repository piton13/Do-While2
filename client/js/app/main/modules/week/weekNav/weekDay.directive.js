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
        controllerAs: 'week',
        templateUrl: 'weekDay.template.html'
    };
};
