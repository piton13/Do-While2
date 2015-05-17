/**
 * @ngInject
 * */
module.exports = function ($scope, menuService) {
    this.toggleMenuVisibility = menuService.toggleVisibility;
    $scope.$onRootScope('$stateChangeSuccess', menuService.hide);
};
