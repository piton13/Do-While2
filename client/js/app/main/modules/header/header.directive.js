/**
 * @ngInject
 * */
module.exports = function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            color: '='
        },
        controller: require('./header.directive.controller'),
        controllerAs: 'header',
        templateUrl: 'header.template.html'
    };
};
