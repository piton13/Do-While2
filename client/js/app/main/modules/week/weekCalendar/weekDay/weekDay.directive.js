/**
 * @ngInject
 */
module.exports = function () {
    return {
        restrict: 'E',
        required: '^dwWeekCalendar',
        replace: true,
        transclude: false,
        scope: {
            date: '=',
            onSelected: '='
        },
        controller: require('./weekDay.directive.ctrl'),
        controllerAs: 'day',
        bindToController: true,
        templateUrl: 'weekDay.tpl.html'
    };
};