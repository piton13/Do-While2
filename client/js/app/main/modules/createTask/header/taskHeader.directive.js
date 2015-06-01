/*@ngInject*/
module.exports = function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {},
        controller: require('../../header/header.directive.controller'),
        controllerAs: 'header',
        templateUrl: 'taskHeader.tpl.html'
    };
};
