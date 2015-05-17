/**
 * @ngInject
 */
module.exports = function (menuService) {
    this.toggleMenuVisibility = menuService.toggleVisibility;
};
