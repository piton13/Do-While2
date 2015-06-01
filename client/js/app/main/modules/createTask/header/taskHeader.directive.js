/*@ngInject*/
module.exports = function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        scope: {},
        controller: require('../../header/header.directive.controller'),
        controllerAs: 'header',
        templateUrl: 'taskHeader.tpl.html'
    };
};