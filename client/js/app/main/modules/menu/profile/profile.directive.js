module.exports = function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        scope: {},
        controller: require('./profile.directive.controller'),
        controllerAs: 'profile',
        templateUrl: 'profile.template.html'
    };
};