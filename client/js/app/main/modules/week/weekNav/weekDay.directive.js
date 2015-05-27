/**
 * @ngInject
 */
module.exports = function () {
    return {
        restrict: 'E',
        required: '^dwWeekNav',
        replace: true,
        transclude: true,
        templateUrl: 'weekDay.template.html'
    };
};
