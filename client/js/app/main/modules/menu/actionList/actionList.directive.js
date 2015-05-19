/**
 * @ngInject
 */
module.exports = function (viewResolver) {
    return {
        restrict: 'E',
        require: '^dwMenu',
        replace: true,
        transclude: false,
        scope: {},
        templateUrl: viewResolver.resolve('actionList.template.html', __dirname)
    };
};