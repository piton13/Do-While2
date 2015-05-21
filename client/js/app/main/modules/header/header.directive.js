/**
 * @ngInject
 * */
module.exports = function ($templateCache) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            color: '=',
            menuClick: '&'
        },
        controller: require('./header.directive.controller'),
        controllerAs: 'header',
        template: $templateCache.get('header.template.html')
    };
};
