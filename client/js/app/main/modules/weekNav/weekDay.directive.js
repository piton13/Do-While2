/**
 * @ngInject
 */
module.exports = function (viewResolver) {
    return {
        restrict: 'E',
        required: '^dwWeekNav',
        replace: true,
        transclude: true,
        templateUrl: viewResolver.resolve('weekDay.template.html', __dirname)
    };
};
