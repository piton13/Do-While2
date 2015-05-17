/**
 * @ngInject
 */
module.exports = function (viewResolver) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: viewResolver.resolve('weekNav.template.html', __dirname)
    };
};